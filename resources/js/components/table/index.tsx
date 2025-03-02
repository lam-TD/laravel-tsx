import React, { useState } from 'react';
import { Table as AntTable } from 'antd';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ header: string; accessor: string }>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascend' | 'descend' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredData = React.useMemo(() => {
    return data.filter((row) => columns.some((column) => row[column.accessor].toString().toLowerCase().includes(filter.toLowerCase())));
  }, [data, columns, filter]);

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascend' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascend' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredData;
  }, [filteredData, sortConfig]);

  // const paginatedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const requestSort = (key: string) => {
    let direction: 'ascend' | 'descend' = 'ascend';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascend') {
      direction = 'descend';
    }
    setSortConfig({ key, direction });
  };

  const columnsWithSort = columns.map((column) => ({
    ...column,
    sorter: true,
    sortOrder: sortConfig?.key === column.accessor ? sortConfig.direction : null,
    onHeaderCell: () => ({
      onClick: () => requestSort(column.accessor),
    }),
  }));

  return (
    <div className="overflow-x-auto p-4">
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 rounded border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <AntTable
        columns={columnsWithSort}
        dataSource={data}
        // pagination={{
        //   current: currentPage,
        //   pageSize: rowsPerPage,
        //   total: filteredData.length,
        //   onChange: (page) => setCurrentPage(page),
        // }}
        // rowKey={(record) => record.id}
      />
    </div>
  );
};

export default Table;

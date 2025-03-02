import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Table as AntTable, Input } from 'antd';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Finance',
    href: '/finance',
  },
  {
    title: 'Activity',
    href: '/activity',
  },
];

const columns = [
  {
    key: 'Date',
    title: 'Date',
    dataIndex: 'date',
  },
  {
    key: 'category',
    title: 'Category',
    dataIndex: 'type',
  },
  {
    key: 'Amount',
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    key: 'Description',
    title: 'Description',
    dataIndex: 'description',
  },
];

const data = [
  {
    date: '2021-01-01',
    description: 'Payment from client',
    amount: '$1000',
    type: 'Coffee',
  },
  {
    date: '2021-01-02',
    description: 'Payment from client',
    amount: '$1000',
    type: 'Food',
  },
  {
    date: '2021-01-03',
    description: 'Payment from client',
    amount: '$1000',
    type: 'Books',
  },
];

export default function FinanceHistory() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      
      <AntTable size='small' columns={columns} dataSource={data} />
    </AppLayout>
  );
}

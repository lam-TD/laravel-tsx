import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

export default function UserList() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                            <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-all-search"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-all-search" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Accessories
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Available
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Weight
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">3.0 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-2"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-2" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Laptop PC</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$1999</td>
                                    <td className="px-6 py-4">1.0 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">$99</td>
                                    <td className="px-6 py-4">0.2 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Apple Watch
                                    </th>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Watches</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">$199</td>
                                    <td className="px-6 py-4">0.12 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Apple iMac
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">PC</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">7.0 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Apple AirPods
                                    </th>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$399</td>
                                    <td className="px-6 py-4">38 g</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        iPad Pro
                                    </th>
                                    <td className="px-6 py-4">Gold</td>
                                    <td className="px-6 py-4">Tablet</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$699</td>
                                    <td className="px-6 py-4">1.3 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Magic Keyboard
                                    </th>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">$99</td>
                                    <td className="px-6 py-4">453 g</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        Apple TV 4K
                                    </th>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">TV</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">$179</td>
                                    <td className="px-6 py-4">1.78 lb.</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-3"
                                                type="checkbox"
                                                className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                                            />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                        AirTag
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">Yes</td>
                                    <td className="px-6 py-4">No</td>
                                    <td className="px-6 py-4">$29</td>
                                    <td className="px-6 py-4">53 g</td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            Edit
                                        </a>
                                        <a href="#" className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500">
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  
                </div>
            </div>
        </AppLayout>
    );
}

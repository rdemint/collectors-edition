import {Fragment, useState} from 'react'
import Link from 'next/link'
import {Popover, Dialog, Transition} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid'


const boulderLists = [
    {name: 'Climbed', description: 'All climbed boulders in the database', href: "/boulders"},
    {name: 'To-do', description: 'Boulders suspected to be worth seeking out', href: "/todo"},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

return(
    <div className="flex shadow-lg items-center justify-between p-6">
        <Link href="/#">
            <a className="text-slate-800">
                <span className="text-yellow-700">C.</span>
                <span className="text-emerald-700">E.</span>
                <span className="text-sky-600">B.</span>
            </a>
        </Link>
        <section id="desktop-menu" className='hidden md:block'>
            <section className="flex space-x-5">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                        <Popover.Button
                            className='group inline-flex items-center rounded-md bg-white hover:text-gray-900 focus:outline-none'
                        >
                            <span>Boulders</span>
                            <ChevronDownIcon
                            className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                            aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {boulderLists.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                                    >
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </a>
                                ))}
                                </div>
                            </div>
                            </Popover.Panel>
                        </Transition>
                        </>
                    )}
            </Popover>
                <Link href="/blog">
                    <a  className="px-3 text-gray-900 hover:underline underline-offset-8">Blog</a>
                </Link>
                <Link href="/about">
                    <a className="px-3 text-gray-900 hover:underline underline-offset-8">About</a>
                </Link>
            </section>
        </section>
        <section id="mobile-sidebar" className="md:hidden">
                <button onClick={()=> setSidebarOpen(true)}>
                    <Bars3Icon className='w-5 h-5'/>
                </button>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 " onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <div className="fixed top-20 inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-[85%] flex-1 flex-col overflow-y-auto overflow-y-auto bg-white pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="pl-6">
                                        {boulderLists.map((item)=> (
                                            <a key={item.name}
                                            href={item.href}
                                            className="block rounded-md p-3 hover:bg-gray-200">
                                                <p className='text-base text-gray-900'>{item.name}</p>
                                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                            </a>
                                        ))}
                                        <Link href="/blog">
                                            <a  onClick={()=> setSidebarOpen(false)} className="block p-3 text-gray-900 text-base">Blog</a>
                                        </Link>
                                        <Link href="/about">
                                            <a onClick={()=> setSidebarOpen(false)} className="block p-3 text-gray-900">About</a>
                                        </Link>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </section>
        </div>
)
}
"use client";
import React, {useEffect} from "react";
import {Nav} from "@/components/nav";
import {PanelLeftClose, PanelRightClose} from "lucide-react";
import {Button} from "@/components/ui/button";
import PageActions from "@/components/PageActions";
import {usePathname, useRouter} from "next/navigation";
import {usePageStateStore} from "@/store/PageStateStore";
import {useSettingStore} from "@/store/SettingStore";

export default function SidebarLayout({children}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const pathname = usePathname();

    const {isSidebarOpen, setSidebarOpen, setLastRoute} = useSettingStore();
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }
    return (
        <div className="w-full h-full overflow-hidden">
            <div className="">
                <div
                    className={`absolute w-60 h-screen transform border-r transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} pt-2`}
                >
                    <Nav/>
                </div>
                <div
                    className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "sm:pl-60 translate-x-60 sm:translate-x-0 sm:transform-none" : "sm:pl-0 translate-x-0"}`}>
                    <div
                        className="w-full border-b p-1 pr-2 flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={``}
                            onClick={toggleSidebar}
                        >
                            {
                                isSidebarOpen ?
                                    <PanelLeftClose className="w-8 h-8"
                                                    strokeWidth={1}/> :
                                    <PanelRightClose
                                        className="w-8 h-8 "
                                        strokeWidth={1}></PanelRightClose>
                            }
                        </Button>
                        <PageActions/>
                    </div>
                    <div
                        className="overflow-hidden w-full flex justify-center min-h-screen">
                        <div
                            className={" w-full px-3 md:w-[700px] md:px-8" +
                                " lg:w-[1100px]" +
                                " flex " +
                                " justify-center overflow-y-scroll h-screen" +
                                " no-scrollbar"}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
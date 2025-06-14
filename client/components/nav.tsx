import React from "react";
import navConfig from "@/config/navConfig";
import {cn} from "@/lib/utils";
import {Accordion} from "@/components/ui/accordion";

import NavItem from "@/components/navItem";
import LoggedInUserMenu from "@/components/LoggedInUserMenu";

export function Nav({className}: { className?: string }) {
    return (
        <div
            className={`w-full ${cn(className)} h-full flex flex-col justify-between`}>
            <nav className="grid gap-1 px-2 w-full">
                <Accordion type="single" collapsible
                           className="hover:decoration-0">
                    {navConfig.navItems.map((navItem, index) => {
                        return (
                            <div key={index} className="flex flex-col">
                                <NavItem label={navItem.label}
                                         icon={navItem.icon} path={navItem.path}
                                         subItems={navItem.subItems}/>
                            </div>
                        )
                    })}
                </Accordion>
            </nav>
            <LoggedInUserMenu/>
        </div>
    );
}
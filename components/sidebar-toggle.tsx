import type { ComponentProps } from 'react';

import { useSidebar } from '@/components/ui/sidebar';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

import { SidebarLeftIcon } from './icons';
import { Button } from './ui/button';

export function SidebarToggle({
                                  className,
                              }: ComponentProps<'button'>) {
    const { toggleSidebar } = useSidebar();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    data-testid="sidebar-toggle-button"
                    onClick={toggleSidebar}
                    variant="outline"
                    className="h-8 mr-2 px-2 md:h-10 md:px-3 backdrop-blur-xl text-white transition-all duration-200 rounded-xl"
                >
                    <SidebarLeftIcon size={16} />
                    {/*<span className="hidden md:inline-block ml-2">Menu</span>*/}
                </Button>
            </TooltipTrigger>
            <TooltipContent align="start" className="hidden md:block bg-black/80 backdrop-blur-sm border-white/20">
                Toggle Sidebar
            </TooltipContent>
        </Tooltip>
    );
}

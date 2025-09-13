'use client';

import type { User } from 'next-auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Mail,
    MessageSquare,
    BarChart3,
    Calendar,
    Plus,
    PanelLeft
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar,
} from '@/components/ui/sidebar';
import { SidebarHistory } from '@/components/sidebar-history';
import { SidebarUserNav } from '@/components/sidebar-user-nav';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function AppSidebar({ user }: { user: User | undefined }) {
    const router = useRouter();
    const { setOpenMobile } = useSidebar();

    return (
        <Sidebar className="group-data-[side=left]:border-r-0">
            {/* Glassmorphic Container */}
            <div className="h-full m-4 border border-white/20 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden">

                {/* Header */}
                <SidebarHeader className="border-b border-white/10 p-4 rounded-t-2xl">
                    <SidebarMenu>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                {/* Bulă animată */}
                                <div className="bubble flex items-center justify-center">
                                    <span className="text-white text-[10px] font-bold leading-none select-none"></span>
                                </div>

                                <Link
                                    href="/"
                                    onClick={() => setOpenMobile(false)}
                                    className="text-white font-semibold text-lg"
                                >
                                    CXO AI
                                </Link>
                            </div>


                        </div>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={() => {
                                        setOpenMobile(false);
                                        router.push('/');
                                        router.refresh();
                                    }}
                                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl h-10 flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-200"
                                >
                                    <Plus className="h-4 w-4" />
                                    New Chat
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent align="center" className="hidden md:block bg-black/80 backdrop-blur-sm border-white/20">
                                Start a new conversation
                            </TooltipContent>
                        </Tooltip>
                    </SidebarMenu>
                </SidebarHeader>

                {/* Content with History */}
                <SidebarContent className="bg-transparent flex-1 overflow-y-auto">
                    <div className="px-3 py-2">
                        <SidebarHistory user={user} />
                    </div>
                </SidebarContent>

                {/* Footer */}
                <SidebarFooter className="border-t border-white/10 bg-transparent p-3 rounded-b-2xl">
                    {user && <SidebarUserNav user={user} />}
                </SidebarFooter>

            </div>
        </Sidebar>
    );
}

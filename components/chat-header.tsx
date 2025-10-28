'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { memo } from 'react';
import { type VisibilityType, VisibilitySelector } from './visibility-selector';
import type { Session } from 'next-auth';
import {Share} from "lucide-react";
import {AgentSelector} from "@/components/agent-selector";
import {SidebarToggle} from "@/components/sidebar-toggle";

function PureChatHeader({
                          chatId,
                          selectedVisibilityType,
                          isReadonly,
                          session,
                        }: {
  chatId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
  session: Session;
}) {

  return (
      <header className="sticky top-0 flex justify-between items-center gap-2 bg-background px-2 py-4 md:px-2">


          <div className={`flex items-center justify-center`}>
              <SidebarToggle />
              {!isReadonly && (

                  <AgentSelector
                      chatId={chatId}
                      selectedAgentType={"main"}
                  />
              )}
          </div>


        <Button
            className="bg-transparent text-white"
            asChild
        >
          <Link
              href={`#`}
              target="_noblank"
          >

            <Share size={16}/>
            Share
          </Link>
        </Button>
      </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return (
      prevProps.chatId === nextProps.chatId &&
      prevProps.selectedVisibilityType === nextProps.selectedVisibilityType &&
      prevProps.isReadonly === nextProps.isReadonly
  );
});

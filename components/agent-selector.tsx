'use client';

import { type ReactNode, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

// import { useChatAgent } from '@/hooks/use-chat-agent';
import {
  ChevronDownIcon,
  CodeIcon,
  DollarSignIcon,
  CrownIcon,
  MegaphoneIcon,
  SettingsIcon,
  CheckCircle} from "lucide-react";

export type AgentType = 'main';

const agents: Array<{
  id: AgentType;
  label: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    id: 'main',
    label: 'MAIN',
    description: 'MAIN',
    icon: <CrownIcon />,
  }
];

export function AgentSelector({
                                chatId,
                                className,
                                selectedAgentType,
                              }: {
  chatId: string;
  selectedAgentType: AgentType;
} & React.ComponentProps<typeof Button>) {
  const [open, setOpen] = useState(false);

  const [agentType, setAgentType] = useState(selectedAgentType);

  // const { agentType, setAgentType } = useChatAgent({
  //   chatId,
  //   initialAgentType: selectedAgentType,
  // });

  const selectedAgent = useMemo(
      () => agents.find((agent) => agent.id === agentType),
      [agentType],
  );

  return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
            asChild
            className={cn(
                'w-fit data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
                className,
            )}
        >
          <Button
              data-testid="agent-selector"
              variant="outline"
              className=" focus:outline-hidden focus:ring-0 md:flex md:h-fit md:px-2"
          >
            {selectedAgent?.icon}
            {selectedAgent?.label}
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="min-w-[300px]">
          {agents.map((agent) => (
              <DropdownMenuItem
                  data-testid={`agent-selector-item-${agent.id}`}
                  key={agent.id}
                  onSelect={() => {
                    setAgentType(agent.id);
                    setOpen(false);
                  }}
                  className="group/item flex flex-row items-center justify-between gap-4"
                  data-active={agent.id === agentType}
              >
                <div className="flex flex-row items-center gap-3">
                  <div className="text-muted-foreground">
                    {agent.icon}
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="font-medium">{agent.label}</div>
                    {agent.description && (
                        <div className="text-muted-foreground text-xs">
                          {agent.description}
                        </div>
                    )}
                  </div>
                </div>
                <div className="text-foreground opacity-0 group-data-[active=true]/item:opacity-100 dark:text-foreground">
                  <CheckCircle className="h-4 w-4" />
                </div>
              </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  );
}

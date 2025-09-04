"use client";

import React from "react";
import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";

export function NavigationAction() {

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          onClick={() => open("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 dark:group-hover:bg-indigo-500 group-hover:bg-indigo-500">
            <Plus
              className="group-hover:text-white transition text-indigo-400"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}
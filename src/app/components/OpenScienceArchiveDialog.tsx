import { ArrowUpRight } from "lucide-react";
import { publications } from "../content/openScienceArchiveContent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface OpenScienceArchiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OpenScienceArchiveDialog({
  open,
  onOpenChange,
}: OpenScienceArchiveDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100vh-1rem)] max-w-[calc(100%-1rem)] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-[1rem] border-[#00458b]/10 p-0 sm:max-h-[90vh] sm:max-w-4xl">
        <div className="border-b border-[#00458b]/10 px-4 py-4 pr-12 sm:px-8 sm:py-6">
          <DialogHeader className="text-left">
            <p className="section-eyebrow mb-3 w-fit sm:mb-4">Research Archive</p>
            <DialogTitle className="font-display text-[1.32rem] leading-[1.02] tracking-[-0.06em] text-[#00458b] sm:text-[2.4rem]">
              Selected publications, talks, workshops, and research outputs
            </DialogTitle>
            <DialogDescription className="max-w-3xl text-[0.82rem] leading-5 text-[#00458b]/72 sm:text-sm sm:leading-7">
              A fuller list of the papers, talks, workshops, datasets, and reports
              that inform Lampata&apos;s work across urban analytics, mobility data,
              FAIR open science, and Earth observation.
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="min-h-0">
          <div className="grid gap-3 px-4 py-4 pr-6 sm:gap-4 sm:px-8 sm:py-6 sm:pr-10">
            {publications.map((publication) => (
              <article
                key={`${publication.title}-${publication.venue}-${publication.year}`}
                className="rounded-[0.9rem] border border-[#00458b]/10 bg-[#f8fbff] p-4 sm:p-5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="tag-mono text-[#00458b]/84">
                        {publication.kind}
                      </span>
                      <p className="text-[0.78rem] leading-5 text-[#00458b]/56 sm:text-sm sm:leading-6">
                        {publication.venue} · {publication.year}
                      </p>
                    </div>

                    <h3 className="mt-2.5 break-words font-display text-[1.06rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:mt-3 sm:text-[1.4rem]">
                      {publication.title}
                    </h3>

                    <p className="mt-2.5 max-w-3xl text-[0.84rem] leading-6 text-[#00458b]/74 sm:mt-3 sm:text-sm sm:leading-7">
                      {publication.summary}
                    </p>
                  </div>

                  {publication.href ? (
                    <a
                      href={publication.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#00458b]/12 bg-white px-4 py-2.5 text-[0.82rem] font-semibold text-[#00458b] transition-colors hover:border-[#00458b]/28 hover:bg-white sm:text-sm"
                    >
                      View publication
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

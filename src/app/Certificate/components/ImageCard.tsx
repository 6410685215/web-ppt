"use client";

import { CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

interface ImageCardProps {
  image: string;
  title: string;
}

const ImageCard = (props: ImageCardProps) => {
  return (
    <Dialog>
      <CardHeader className="p-0">
        <DialogTrigger asChild>
          <Image
            src={props.image}
            alt={props.title}
            width={500}
            height={300}
            className="w-full h-auto object-cover border-b cursor-pointer"
          />
        </DialogTrigger>
        <DialogContent className="bg-white dark:bg-white text-neutral-950 dark:text-neutral-950">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {props.title}
            </DialogTitle>
            <DialogDescription className="mt-2">
              <Image
                src={props.image}
                alt={props.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </CardHeader>
    </Dialog>
  );
};

export default ImageCard;

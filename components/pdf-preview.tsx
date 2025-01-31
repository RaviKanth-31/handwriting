'use client'
import { ResizablePanel } from "./ui/resizable";
import { useContext } from "react";
import { PDFContext } from "./providers/pdf-provider";

export function PdfPreview() {
    const { pdfInfo } = useContext(PDFContext);

    return (
        <>
            <ResizablePanel defaultSize={20} className='p-4'>
                {pdfInfo ?
                    <iframe title="PDF Preview" src={pdfInfo} className='h-full w-full border-4' />
                    : <p className='text-center font-bold place-items-center'>No Preview Available</p>
                }
            </ResizablePanel>
        </>
    )
}
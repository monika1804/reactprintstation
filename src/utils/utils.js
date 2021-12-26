import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { listAll, getMetadata } from "@firebase/storage"
import {supportedFileTypes} from "./constants" 

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function getNumPages(file){
  switch (file.type){
    case "application/pdf":
      let arrayBuff = await file.arrayBuffer()
      let int8Arr = new Int8Array(arrayBuff)
      let doc = await pdfjs.getDocument({data: int8Arr}).promise
      return doc.numPages
    default:
      return 1
  }
}

export function listFilesInFirebase(ref){
  return listAll(ref)
}

export async function getMetadataFromRef(item){
  return await Promise.all(item.map(async(value)=>{
    return await getMetadata(value)
  }))
}

export function isFileTypeSupported(file){
  return supportedFileTypes.includes(file.type)
}
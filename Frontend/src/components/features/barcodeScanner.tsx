import { useState } from "react";
import { useZxing } from "react-zxing";
import ScannerForm from "./scannerForm";

export default function BarcodeScanner(){
    const [scanningResult, setScanningResult] = useState<string | null>(null)
    const {ref} = useZxing({
        onDecodeResult(result){
            setScanningResult(result.getText())
            console.log("Barcode: ", result.getText())
        },
        onError(error){
            console.error(error)
        }
    })

    const handleSubmit = () => {
        console.log(scanningResult)
    }
    return (
        <div>
            {!scanningResult && <video ref={ref}/>}
            <div>
                {scanningResult && <ScannerForm initialText={scanningResult} onSubmit={handleSubmit}></ScannerForm>}
            </div>
        </div>
    )
}
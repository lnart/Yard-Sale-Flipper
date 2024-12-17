import { useState } from "react"
import ButtonComponent from "../../components/common/button"
import { 
    Box,
    Card,
    CardContent,
    Stack
  } from '@mui/material'
  import BarcodeScanner from "../../components/features/barcodeScanner"
  import TextSearchForm from "../../components/features/textSearch"
  import PageHeadline from "../../components/common/headline"

export const Home = () => {
    const [barcodeButtonColor, setBarcodeButtonColor] = useState("primary")
    const [textSearchButtonColor, setTextSearchButtonColor] = useState("primary")
    const [inputComponent, setInputComponent] = useState("")
    const handleBarcode = () => {
        setInputComponent("barcodeScanner")
        setTextSearchButtonColor("primary")
        setBarcodeButtonColor("secondary")
    }

    const handleTextSearch = () => {
        setInputComponent("textSearch")
        setBarcodeButtonColor("primary")
        setTextSearchButtonColor("secondary")
    }
    return (
        <Box sx={{mt:4}}>
            <PageHeadline></PageHeadline>
            <Card>
                <CardContent>
                    <Stack spacing={2}>
                        <ButtonComponent text={"Scan Item"} onClick={handleBarcode} color={barcodeButtonColor}>
                        </ButtonComponent>
                        <ButtonComponent text={"Search with text"} onClick={handleTextSearch} color={textSearchButtonColor}>
                        </ButtonComponent>
                        {inputComponent==="barcodeScanner" && <BarcodeScanner></BarcodeScanner>}
                        {inputComponent==="textSearch" && <TextSearchForm></TextSearchForm>}
                    </Stack>
                </CardContent>
            </Card>
        </Box>

    )
}
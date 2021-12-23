import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { useAuth } from "../context/context"
import { listFilesInFirebase, getMetadataFromRef } from "../utils/utils"
import './card.css'
export default function UploadedCards({update, setFile}) {
  let { getRef, currentUser } = useAuth()
  let [ files, setFiles ] = useState([])
  let [ active, setActive ] = useState(0)
  useEffect(async ()=>{
    let filesRef = await listFilesInFirebase(getRef(currentUser))
    let files = await getMetadataFromRef(filesRef.items)
    console.log(files)
    setFiles(files)
  },[update])

  const handleCardClick = (e, index) => {
    setActive(index)
    setFile({fileName: files[index].customMetadata.fileName, numPage: files[index].customMetadata.numPage})
  }

  function UCards(){
    let data = files.map((value, index) => {
      return (
        <Card id = {active === index? "active":""}  variant = "outlined" key = {index} 
          sx = {{width:"200px", m: "10px", borderRadius: "10px"}} 
          onClick={e => handleCardClick(e, index)}
        >
          <CardActionArea>
            <CardHeader sx = {{backgroundColor: "#2196f3", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {value.contentType.split("/")[1]}
                    </Avatar>
                  }
              title = {value.customMetadata.fileName}
            />
            <CardContent>       
                NUMBER OF PAGE: {value.customMetadata.numPage}
                <br />
                FILE TYPE: {value.contentType.split("/")[1]}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size = "small">Delete</Button>
          </CardActions>
        </Card>
      )})
    return data
  }
  return(
    <Box sx = {{display: "flex", flexDirection: "row", flexWrap: "wrap" , justifyContent: "flex-start", padding: "10px"}}>
      <UCards/>
    </Box>
  )
}
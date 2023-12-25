import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  Image,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DownloadIcon from "./DownloadIcon";

export default function DownloadButton() {
  const { cards } = useSelector((state) => state.cards); // getting the cards state to print values to the PDF
  const { slug, id } = useParams(); // using the slug to target the specific cards and terms

  //creating stylesheet for pdf
  const MyDoc = () => {
    return (
      <Document
        title={cards[slug].values.cardName}
        author="User"
        creator="SBK."
        producer="SBK."
      >
        <Page size="A4" style={{ backgroundColor: "#f5f1ec" }}>
          <View
            style={{
              padding: 15,
              backgroundColor: "#cc1313",
            }}
          >
            <Text
              style={{
                color: "white",
                marginBottom: 10,
                paddingBottom: 5,
                fontFamily: "Times-Bold",
                fontSize: "3vh",
                fontWeight: 900,
              }}
            >
              {cards[slug].values.cardName}
            </Text>
          </View>
          <View style={{ margin: 10, padding: 5 }}>
            <Text
              style={{
                fontSize: "1.5vh",
                fontFamily: "Times-Italic",
              }}
            >
              {cards[slug].values.cardDesc}
            </Text>
          </View>
          <View
            style={{
              margin: 10,
              padding: 5,
            }}
          >
            {cards[slug].values.terms[id].termImg &&
            cards[slug].values.terms[id].termImg.includes("data:image/jpeg") ? (
              <Image
                src={cards[slug].values.terms[id].termImg}
                alt="Image"
                style={{
                  height: "50%",
                  margin: 10,
                  padding: 5,
                  borderTopLeftRadius: "2.5vh",
                  borderTopRightRadius: "2.5vh",
                  borderBottomRightRadius: "2.5vh",
                  borderBottomLeftRadius: "2.5vh",
                }}
              />
            ) : null}

            <Text
              style={{
                marginTop: 20,
                marginBottom: 5,
                paddingBottom: 5,
                fontSize: "2vh",
                fontWeight: 900,
                fontFamily: "Times-BoldItalic",
              }}
            >
              {cards[slug].values.terms[id].termName}
            </Text>
            <Text style={{ fontSize: "1.5vh", fontFamily: "Times-Italic" }}>
              {cards[slug].values.terms[id].termDef}
            </Text>
          </View>
          <Text
            style={{
              position: "absolute",
              bottom: 3,
              right: 3,
              fontFamily: "Times-Italic",
              padding: 3,
            }}
          >
            By SBK
          </Text>
        </Page>
      </Document>
    );
  };

  return (
    <PDFDownloadLink
      document={<MyDoc />} // on click of download - loads the data to the stylesheet
      fileName={`${cards[slug].values.terms[id].termName}.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          <DownloadIcon value="Loading File..." /> // if the file is loading, loads the download icon component with text loading file
        ) : (
          <DownloadIcon value="Download" /> // if the file has finished loading, loads the download icon component with text  Download
        )
      }
    </PDFDownloadLink>
  );
}

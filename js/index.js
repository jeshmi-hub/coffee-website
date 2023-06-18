const nameInput = document.getElementById('name')
const generatePDF = async(name)=>{
    const {PDFDocument, rgb} = PDFLib;

    const exBytes = await fetch("../images/Certificate.pdf").then(res=>{
        return res.arrayBuffer();
    });

    const exFont = await fetch("../font/Saira_Condensed-ExtraLight.ttf").then(res=>{
        return res.arrayBuffer();
    })

 
   

    const pdfDoc = await PDFDocument.load(exBytes)

    pdfDoc.registerFontkit(fontkit);
    const myFont = await pdfDoc.embedFont(exFont);

    const pages = pdfDoc.getPages();
    const firstPg = pages[0]
    firstPg.drawText(name,{
       x:300,
       y:300, 
       size: 58,
       font: myFont

    })


    const uri = await pdfDoc.saveAsBase64({dataUri: true})
    window.open(uri)

    document.querySelector('#mypdf').src = uri;

};

generatePDF('Jenny Rajak');


import React, { useState, useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
//import logo from "./logo.png";

import { uploadFile } from "react-s3";

// import { children } from "../../libs/children";
import css from "./HomeworkViewer.module.css";

const {
  REACT_APP_BUCKETNAME,
  REACT_APP_REGION,
  REACT_APP_ACCESS_KEY_ID,
  REACT_APP_SECRET_ACCESS_KEY,
} = process.env;

const config = {
  bucketName: REACT_APP_BUCKETNAME,
  dirName: "placeholder",
  region: REACT_APP_REGION,
  accessKeyId: REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
};

function HomeworkViewer({
  mark,
  clickToClassroom,
  homework,
  childHomework,
  name,
  avatar,
}) {
  const [selectedFile, setSelectedFile] = useState();

  const [customColor, setCustomColor] = useState("blue");
  console.log(customColor);

  // controlled component
  const [comment, setComment] = useState("");

  const storageName = `canvasFile`;
  const refName = `canvasRef`

  const saveableCanvas = useRef(refName);

  const tempMark = `{"lines":[{"points":[{"x":110.32695108794267,"y":228.29045514685077},{"x":110.32695108794267,"y":228.29045514685077},{"x":110.63789988644515,"y":227.84436803616924},{"x":110.63789988644515,"y":227.84436803616924},{"x":112.36150528811406,"y":228.53525638437225},{"x":120.58379339076976,"y":240.1935691437486},{"x":124.5741019519189,"y":249.05762692923008},{"x":127.08190196379192,"y":257.4971044595341},{"x":128.7130045241213,"y":264.3281254197352},{"x":133.54711103332284,"y":283.3689877160036},{"x":136.3043741686347,"y":290.757370241657},{"x":137.11716745431067,"y":292.8290206840919},{"x":137.29090317423442,"y":293.18957400192767},{"x":137.29090317423442,"y":293.18957400192767},{"x":155.09224012803034,"y":282.97315113214273},{"x":167.72581899289864,"y":271.1861925004621},{"x":180.08057573884864,"y":261.4346786472875},{"x":212.31567073036803,"y":241.34660833262282},{"x":225.89172333616736,"y":231.1889512135811},{"x":235.68521133383445,"y":222.1424505384337},{"x":248.88296801499524,"y":209.3514525544605},{"x":254.24037958477908,"y":203.70509451967445},{"x":261.1376575290354,"y":196.60646433782776},{"x":267.51688905877717,"y":190.95636335379942},{"x":271.3291510009928,"y":187.7392201569285},{"x":274.13052855904306,"y":185.49753325548426},{"x":274.61120189138404,"y":185.0615921618664},{"x":276.27617824544535,"y":183.67600887442197},{"x":276.7591245221455,"y":183.22174530623772},{"x":278.2215178999667,"y":181.6871591512662},{"x":280.1816998924366,"y":179.6490394449621},{"x":280.66463664258583,"y":179.08884376900005},{"x":280.66463664258583,"y":179.08884376900005}],"brushColor":"#66ff00","brushRadius":2},{"points":[{"x":48.847564773415144,"y":201.41463387457654},{"x":48.847564773415144,"y":201.41463387457654},{"x":49.4696168141852,"y":202.27509834185392},{"x":49.4696168141852,"y":202.27509834185392},{"x":52.022423728004185,"y":200.84982012240636},{"x":62.54102052185242,"y":188.98079315352635},{"x":69.14128265045419,"y":180.47888595613924},{"x":73.68965547024587,"y":173.88024328577228},{"x":76.57390063039439,"y":169.79944628651785},{"x":85.74402514355451,"y":161.20566294173082},{"x":94.68805018785068,"y":154.9083746919129},{"x":103.60540128997266,"y":148.78947099320155},{"x":127.13133149914202,"y":140.8410124339293},{"x":140.71269670212564,"y":138.24932900304074},{"x":153.5491050903274,"y":137.08448644895242},{"x":160.51960085339618,"y":136.68559192531333},{"x":215.50062856913496,"y":136.12282208327588},{"x":225.5001870137214,"y":136.06699473366896},{"x":252.51471272093278,"y":137.40595552504115},{"x":274.71969368587634,"y":141.7143090442017},{"x":291.8669590261797,"y":146.05511329565658},{"x":306.7016358108286,"y":148.80942873668147},{"x":328.63905603467987,"y":152.17845992315964},{"x":332.8338462373418,"y":153.1891537953819},{"x":335.1808698480013,"y":154.01536794645804},{"x":341.6023784928369,"y":156.9758736593696},{"x":350.3756659483686,"y":162.5581167341393},{"x":353.77265322873166,"y":165.76389543934562},{"x":355.8943662363111,"y":168.98173654868205},{"x":359.54706899114376,"y":183.36899838978022},{"x":361.0120516344035,"y":195.09260693261035},{"x":359.53888441359464,"y":212.04505461429497},{"x":356.0338176419328,"y":228.27055976794162},{"x":348.37229090676016,"y":259.348822164822},{"x":343.42257761515253,"y":273.6592158625118},{"x":333.79608749484294,"y":293.23192416227636},{"x":324.80536501681354,"y":307.79008462303705},{"x":320.0885032654611,"y":314.97046238747726},{"x":306.1345556326745,"y":336.00086645969026},{"x":297.6662805627923,"y":347.37480270875733},{"x":292.52879057684896,"y":353.0815628121794},{"x":288.35417942545746,"y":356.9004008307938},{"x":281.75077649182595,"y":362.35649724940976},{"x":265.80839961963824,"y":371.8569635129},{"x":254.4238710448631,"y":377.03320612515466},{"x":224.93949768760137,"y":386.37537689471543},{"x":207.11671388363143,"y":390.9913527049777},{"x":200.3462975386107,"y":392.08551975024403},{"x":194.43154140910497,"y":392.7200314055363},{"x":179.2381650106134,"y":389.4930868784724},{"x":163.52467716329627,"y":382.7388282776541},{"x":148.43869306937214,"y":375.9340646463205},{"x":137.92553939041923,"y":369.94206432301246},{"x":120.37385668669668,"y":357.81960073102346},{"x":110.45880755266491,"y":348.9837188849755},{"x":102.97866129597004,"y":341.49189629165477},{"x":99.61935829868492,"y":337.8360636494752},{"x":88.40505285712358,"y":325.0282965905027},{"x":85.10377856348505,"y":320.01948644813973},{"x":83.91546776492848,"y":318.1410933018666},{"x":77.46120395425156,"y":303.9264109077189},{"x":76.06894397285198,"y":299.45699083174304},{"x":74.66500784597766,"y":291.80308184445295},{"x":74.23657177835969,"y":288.87368175666694},{"x":73.80500710262848,"y":284.92882879674653},{"x":73.6193907546714,"y":282.9476761061872},{"x":72.83394014282902,"y":275.9256280210037},{"x":72.50161972859382,"y":271.9581251841286},{"x":71.9934519838869,"y":267.9067040431777},{"x":71.78132209973545,"y":265.93139613275537},{"x":70.86459508920068,"y":257.9221592105847},{"x":70.76020681662938,"y":256.933644823746},{"x":70.58090939621155,"y":254.95121897034699},{"x":69.96212853250113,"y":249.91059109173202},{"x":69.75439798257342,"y":247.93425681395016},{"x":69.29326325371072,"y":240.97375185187636},{"x":69.0602049902292,"y":235.98691663310137},{"x":69.01715233628069,"y":234.98885121523656},{"x":68.63356592615042,"y":230.946339535233},{"x":68.472160394542,"y":228.96055618135227},{"x":67.83829937460739,"y":225.76997689185117},{"x":67.3764032332791,"y":222.85238840513335},{"x":66.91055954396045,"y":218.91680837191495},{"x":66.80269638448489,"y":217.9290813615236},{"x":66.70299389690544,"y":216.9395479681606},{"x":66.61085333297704,"y":215.9484729096489},{"x":65.66638231310387,"y":210.80282964688854},{"x":65.50207468142102,"y":209.8318086939408},{"x":65.34991091250569,"y":208.85655218078983},{"x":65.09699908742574,"y":207.71561333178548},{"x":65.02204811402518,"y":207.47149410854976},{"x":64.59049651222811,"y":206.2813048129837},{"x":64.43558857194101,"y":205.93800555167738},{"x":64.22347429091062,"y":205.54712482344289},{"x":61.67145167516194,"y":201.29141313042777},{"x":60.933568418937185,"y":200.1296198052471},{"x":60.933568418937185,"y":200.1296198052471}],"brushColor":"#66ff00","brushRadius":2}],"width":400,"height":500}`;

  // load homework
  useEffect(() => {
    // saveableCanvas.current.loadSaveData(tempMark, false)
  }, []);



  function handleClear() {
    saveableCanvas.current.clear();
  }

  function handleUndo() {
    saveableCanvas.current.undo();
  }


  const uploadClick = () => {
    console.log("get back string of canvas scribbles");
    console.log(saveableCanvas.current.getSaveData())

    console.log(comment);

    //     mark({
    //       name: name,
    //       avatar: avatar,
    //       individualHomeworkImage: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`,
    //       homeworkMarked: true,
    //       comment: "",
    //       annotation: saveableCanvas.current.getSaveData()
    //     });


  };

  return (
    <body>
      <div className={css.tools}>
        <div
          onClick={(e) => setCustomColor("#FF00FF")}
          className={css.colorField}
          style={{ backgroundColor: "magenta" }}
        ></div>

        <div
          onClick={(e) => setCustomColor("#66ff00")}
          className={css.colorField}
          style={{ backgroundColor: "rgb(75, 235, 65)" }}
        ></div>

        <input
          onChange={(e) => setCustomColor(e.target.value)}
          type="color"
          className={css.colorPicker}
        />
        <button onClick={handleUndo} type="button" className={css.button}>
          Undo
        </button>
        <button onClick={handleClear} type="button" className={css.button}>
          Clear
        </button>
        {/* <button onClick={handleSave} type="button" className={css.button}>
          Save
        </button> */}

        <br />
      </div>
      <div className={css.containCanvas}>
        <CanvasDraw
          className={css.myCanvas}
          ref={saveableCanvas}
          //ref2={loadableCanvas}
          brushColor={customColor}
          brushRadius={2}
          // imgSrc={childHomework.individualHomeworkImage}
          imgSrc={"https://www.rewardcharts4kids.com/wp-content/uploads/2011/04/study-charts-1.jpg"}


          //img from database will need to be passed at this level
          canvasWidth={400}
          canvasHeight={500}

        />
        {console.log(childHomework)}
        {console.log(childHomework.individualHomeworkImage)}
        {/* saveData={localStorage.getItem(storageName)} */}
        <div>
          <button className={css.backButton} onClick={clickToClassroom}>
            Back
          </button>
          <div className={css.contain}>
            <p className={css.childName}>{childHomework.name}</p>
            <p>Homework: {homework.name}</p>
            Set: {homework.dateSet}
            <br />
            Due: {homework.dateSet}
            <br />

            <span>Comment:</span>
            <input value={comment} onChange={(event) => setComment(event.target.value)}></input>
          </div>
          <button className={css.myButton} onClick={uploadClick}>
            Mark
          </button>
          {/* // reject just goes back for now */}
          {/* <button className={css.myButton} onClick={clickToClassroom}>
            Reject
          </button> */}
        </div>
      </div>
    </body>
  );
}

export default HomeworkViewer;

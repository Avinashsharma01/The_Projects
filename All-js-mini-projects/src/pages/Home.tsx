import RandomColor from "../assets/images/RandomColor.png";
import Rock from "../assets/images/Rock.png";
import checkbox from "../assets/images/checkbox.png";
import ColorOne from "../assets/images/ColorOne.png";
import ColorTwo from "../assets/images/ColorTwo.png";
import CrandomColor from "../assets/images/CrandomColor.png";
import HoverEffect from "../assets/images/HoverEffect.png";
import ImageSlider from "../assets/images/imageSlider.png";
import kgTopound from "../assets/images/kgTopound.png";
import Loader from "../assets/images/Loader.png";
import miniShop from "../assets/images/mini shop.png";
import mul from "../assets/images/mul.png";
import OnOffline from "../assets/images/OnOffline.png";
import PasswordGen from "../assets/images/PasswordGen.png";
import PassWordCheck from "../assets/images/PassWordCheck.png";
import QrCode from "../assets/images/QrCode.png";
import quize from "../assets/images/quize.png";
import randomimoji from "../assets/images/randomimoji.png";
import ScrollBaar from "../assets/images/ScrollBaar.png";
import StopWatch from "../assets/images/StopWatch.png";
import Temprature from "../assets/images/Temprature.png";
import Testimonial from "../assets/images/Testimonial.png";
import TextAnime from "../assets/images/TextAnime.png";
import TextTOSpeech from "../assets/images/TextTOSpeech.png";
import TextUtil from "../assets/images/TextUtil.png";
import todo from "../assets/images/todoo.png";
import watch from "../assets/images/watch.png";
import Weather from "../assets/images/Weather.png";
import xy from "../assets/images/xy.png";
import HoverTwo from "../assets/images/HoverTwo.png";

const Home = () => {

    const MyData = [
        {
            imageULR:RandomColor,
            Title:'Random Color',
            Link:"https://all-mini-projectss.vercel.app/",
        },
        {
            imageULR:Rock,
            Title:'Rock-Pepar-Scissors',
            Link:"https://rockpeparscissors.netlify.app",
        },
        {
            imageULR:watch,
            Title:'Watch-Calender',
            Link:"https://mini-calenderrrr.netlify.app",
        },
        {
            imageULR:miniShop,
            Title:'Mini-Shoping',
            Link:"https://coruscating-sunshine-5047f8.netlify.app",
        },
        {
            imageULR:Loader,
            Title:'Loader',
            Link:"https://loadingbaar.netlify.app",
        },
        {
            imageULR:Weather,
            Title:'Weather-App',
            Link:"https://weatherweatherw.netlify.app",
        },
        {
            imageULR:Temprature,
            Title:'Temprature',
            Link:"https://tempraturere.netlify.app",
        },
        {
            imageULR:StopWatch,
            Title:'StopWatch-App',
            Link:"https://stopwatchch.netlify.app",
        },
        {
            imageULR:quize,
            Title:'Quize-App',
            Link:"https://quizezeze.netlify.app",
        },
        {
            imageULR:PasswordGen,
            Title:'Password-Ganerator',
            Link:"https://password-generatoreeee.netlify.app",
        },
        {
            imageULR:PassWordCheck,
            Title:'Password-Checker',
            Link:"https://password-checkkkk.netlify.app",
        },
        {
            imageULR:kgTopound,
            Title:'WeightConverter',
            Link:"https://weightconverterweight.netlify.app",
        },
        {
            imageULR:ColorOne,
            Title:'Color-One',
            Link:"tps://coloroneee.netlify.app",
        },
        {
            imageULR:randomimoji,
            Title:'Random-Emoji',
            Link:"https://randomemojiiiiii.netlify.app",
        },
        {
            imageULR:xy,
            Title:'XY-Cordinates',
            Link:"https://xycordinates.netlify.app",
        },
        {
            imageULR:Testimonial,
            Title:'Testimonial',
            Link:"https://testimonialsliderre.netlify.app",
        },
        {
            imageULR:todo,
            Title:'ToDo-App',
            Link:"https://todolistlisttodolist.netlify.app",
        },
        {
            imageULR:ColorTwo,
            Title:'Color Two',
            Link:"https://colortwo.netlify.app",
        },
        {
            imageULR:mul,
            Title:'Multiplication',
            Link:"https://multiplicationnnnnn.netlify.app",
        },
        {
            imageULR:OnOffline,
            Title:'Online And Offline check',
            Link:"https://onlineeeeeee.netlify.app",
        },
        {
            imageULR:TextUtil,
            Title:'TextUtill',
            Link:"https://sweet-paletas-6f65a9.netlify.app",
        },
        {
            imageULR:TextAnime,
            Title:'Text-Lattering',
            Link:"https://textanimationtext.netlify.app",
        },
        {
            imageULR:TextTOSpeech,
            Title:'Text To Speech',
            Link:"https://texttospeechch.netlify.app",
        },
        {
            imageULR:ScrollBaar,
            Title:'Scroll 1-100%',
            Link:"https://scrollwithcontant.netlify.app",
        },
        {
            imageULR:checkbox,
            Title:'CheckBox-UI',
            Link:"https://brave-dropdown.netlify.app",
        },
        {
            imageULR:CrandomColor,
            Title:'RandomColor-Switching',
            Link:"https://randomcolorrrrr.netlify.app",
        },
        {
            imageULR:HoverEffect,
            Title:'Hover-One',
            Link:"https://hovereffecttwo.netlify.app",
        },
        {
            imageULR:QrCode,
            Title:'Qr Code Generator',
            Link:"https://qrr-code-gen.netlify.app",
        },
        {
            imageULR:ImageSlider,
            Title:'Image Slider',
            Link:"https://imagesliderrrrrw.netlify.app",
        },
        {
            imageULR:HoverTwo,
            Title:'Hover Two',
            Link:"https://hovereffecttttt.netlify.app/",
        },
    ];


    return (
        <div className="main ml-10 mr-10 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 md:mb-10 md:mt-2">
          <div className="heading md:mb-2">
          <h1 className="bg-[#0FB0DE] text-white uppercase p-3 text-center text-2xl font-semibold">Here is some javascript mini projects</h1>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-auto mx-auto">
              


            {
                MyData.map((item)=>(
                    <div className="box bg-slate-600 w-[100%] h-[300px]">
                    <div className="img">
                        <img src={item.imageULR} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href={item.Link}
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            {item.Title}
                        </a>
                    </div>
                </div>
                ))
            }







                {/* <div className="box bg-slate-600 w-[100%] h-[300px]">
                    <div className="img">
                        <img src={RandomColor} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://randomcolorcard.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Random Color
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={Rock} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://rockpeparscissors.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Rock-Pepar-Scissors
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={watch} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://mini-calenderrrr.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Watch-Calender
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={miniShop} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://coruscating-sunshine-5047f8.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Mini-Shoping
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img  src={Loader} alt=""/>
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://loadingbaar.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Loader
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={Weather} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://weatherweatherw.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Weather-app
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={Temprature} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://tempraturere.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Temprature
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={StopWatch} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://stopwatchch.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            StopWatch-app
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={quize} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://quizezeze.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Quize-app
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={PasswordGen} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://password-generatoreeee.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Password-Ganerator
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={PassWordCheck} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://password-checkkkk.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Password-Checker
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={kgTopound} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://weightconverterweight.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Weightconverter
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={ColorOne} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="tps://coloroneee.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Color-One
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={randomimoji} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://randomemojiiiiii.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Random-Emoji
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={ColorTwo} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://colortwo.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                           Color-App
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={xy} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://xycordinates.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Random Color
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={Testimonial} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://testimonialsliderre.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Testimonial
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={todo} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://todolistlisttodolist.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            ToDo-App
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={mul} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://multiplicationnnnnn.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Multiplication
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={OnOffline} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://onlineeeeeee.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Online And Offline check
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={TextUtil} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://sweet-paletas-6f65a9.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Text-Utill
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={TextAnime} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://textanimationtext.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Text-Lattering
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={TextTOSpeech} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://texttospeechch.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Text-to-speech
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={ScrollBaar} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://scrollwithcontant.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Scroll 1-100%
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={checkbox} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://brave-dropdown.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            CheckBox-UI
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={CrandomColor} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://randomcolorrrrr.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            RandomColor-Switching
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={HoverEffect} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://hovereffecttwo.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Hover-one
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={QrCode} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://qrr-code-gen.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            QR-code generator
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={ImageSlider} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://imagesliderrrrrw.netlify.app"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            Image Slider
                        </a>
                    </div>
                </div>
                <div className="box bg-slate-600 w-[100%] h-[300px]">
                <div className="img">
                        <img src={HoverTwo} alt="" />
                    </div>
                    <div className="desc w-full h-full flex justify-center items-start mt-2">
                        <a
                            href="https://hovereffecttttt.netlify.app/"
                            className="bg-blue-700 p-1 w-full text-center text-white"
                            target="_blank"
                        >
                            HoverTwo
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Home;

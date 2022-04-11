import Idea from "../components/svg/idea";
import CssBattle from "../components/svg/css.battle";
import Cicada from "../components/svg/cicada";
import LogoDesign from "../components/svg/logoDesign";

import Blind from "../components/svg/blind";
import MonkeyType from "../components/svg/monkey-type";

const loc = process.env.PUBLIC_URL;

export const Timeline = [
  {
    id: 2,
    title: "DEV.INC.CO",
    subtitle: `The client may be the king, but he is not the art director`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],
    desc : `
    Behind every successful business, there is a good UI and a good UX. At dev.inc.co we value
innovation in the design and its implementation. Unlike some other development
competitions, we at Kaivalya don’t have any limits or any restrictions. Using any of the
technologies like Android, ASP.NET, etc. we want participants to develop an innovative
solution based on a given theme which will be judged on the basis of all factors like UI, UX
and efficiency.
    `,
     rules: [
      `“Dev.inc.co” will be conducted onsite in the Campus of BTKIT Dwarahat.`,
      `It is a team event and a team can consist of up to 3 members.,`,
      `We only allow college students to participate and hence a certificate and prizes will be given to winners.`,
      `The event will go live on the commencement day of Kaivalya.`,
      `Winners will be decided on the basis of overall performance of the solution.`,
      `The decision of the jury remains final while deciding the winners for the same`,
    ],

    cls: "cicada",
    left: (
      <>
        {" "}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${loc}/image/webd.png`}
            alt="LOGO "
          />
        </div>{" "}
      </>
    ),
    style: {
      color: {
        bg: "#000",
        primary: "rgba(112, 106, 106, 0.861)",
        secondary: "rgba(82, 71, 71, 0.886)",
        tertiary: "",
      },
    },

    hexas: ["silver", "silver", "silver"],
  },
  {
    id: 3,
    title: "MONKEY TYPING",
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

   desc : `
   These days, typing can seem like it is not such an important skill as it once was. For
example, we are becoming increasingly used to talking to our machines with the advances
being made by Google Home, Alexa, Cortana, and Siri.
But typing remains a fundamental skill, and it is still one of the most important computer
skills you can learn. Learning to type fast and accurately will help you in many ways in life,
and it should be considered an essential skill for anyone who sees themselves working with
a computer in some capacity (which is most people!)
   `,
    rules: [
      `Monkey Typing will be conducted onsite in the Campus of BTKIT Dwarahat.`,
      `This is an individual event.No teams allowed.`,
      `We only allow college students to participate and hence a certificate and prizes will be given to winners.`,
      `The event will go live on the commencement day of Kaivalya`,
      `Winners will be decided on the basis of overall performance of the solution.`,
      `The decision of the jury remains final while deciding the winners for the same`,
    ],

    cls: "monkey",
    left: <MonkeyType />,
    style: {
      color: {
        bg: "#FC8D14",
        primary: "#000",
        secondary: "#000",
        tertiary: "",
      },
    },
    hexas: ["silver", "silver", "silver"],
  },

  {
    id: 4,
    title: "IDEATHON",
    subtile: `Idea is blunt, until it is presented`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

  desc : `
  At “IDEATHON”, the idea is yours and the platform is ours. This year in IDEATHON, we have
not put any barrier on the field of your idea. If you have an idea, be it a business one or a
technological one, register with IDEATHON and present it to us. Then on the basis of ideas,
five ideas will be selected and should be displayed in an onsite event to be conducted in
BTKIT Campu
  `,
    rules: [
      `“IDEATHON” will be conducted onsite in BTKIT Dwarahat Campus.`,
      `It is an individual event and teams aren’t allowed.`,
      `We only allow college students to participate and hence a certificate and prizes will given to winners.`,
      `There will be only one round of simple presentation and questioning which will be
            done on ideas selected which are submitted via mail.
            `,
      `The decision of the jury remains final while deciding the winners for the same.
            `,
    ],

    cls: "ideathon",
    left: <Idea />,
    style: {
      color: {
        bg: "#2476E3",
        primary: "#EE9620",
        secondary: "#EE9620",
        tertiary: "",
      },
    },
    hexas: ["blue", "blue", "blue"],
  },

  {
    id: 1,
    title: "GAMBIT 2022",
    subtitle: "Talk is cheap; show me the code",
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

  desc : `
  In Gambit, we expect you to code as if you’re coding for your life. The organizers of Gambit
believe in situation coding more than anything else. In Gambit we give you a chance to show
your worth as a sports coder sitting anywhere in the world. In the few years since its
inception, Gambit has blossomed into a hub, a community of marathon coders. 
Gambit is the signature event of “Kaivalya”, the annual Activity Fest of the Computer
Science Department, BTKIT Dwarahat. It is an online situation coding competition
conducted on codechef.com or hackerearth.com that allows participants (College Students)
to appear online from anywhere in the world. Gambit 2022 will start at post lunch time (2
P.M. IST or later) and be over by evening. For the first time Gambit will be organized for the
first year (to increase their participation and interest) and other years separately for fair
results. It consists of two rounds, the prelims and final. Participants from colleges are also
encouraged to participate onsite at BTKIT campus. Proper Internet facility will be provided.
There will be several challenges to solve in limited time and winners will be decided based
on factors like number of problems solved, time taken and accuracy of solutions.
  `,
    rules: [
      `“Gambit” will be hosted online on codechef.com or hackerearth.com.`,
      `It is a team event and a team can consist of up to 3 members`,
      `All team members need to register separately for Kaivalya and also need to have an account on codechef.com or hackerearth.com`,
      `We only allow college students to participate and hence a certificate from the college stating the enrolment of the team members needs to be issued and mailed to us in order for the team to claim prizes.`,
      `There will be some time penalty on wrong submission of problems.`,
      `Team solving the most number of problems in the least time will be the winner.`,
    ],

    cls: "cicada",
    left:  <>
    <div
      style={{
        width: "80%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
      className="logoDesign"
    >
      <img
        style={{ width: "100%" }}
        src={`${loc}/image/gambit.png`}
        alt="LOGO "
      />
    </div>
  </>,
    style: {
      color: {
        bg: "#000",
        primary: "rgba(112, 106, 106, 0.861)",
        secondary: "rgba(82, 71, 71, 0.886)",
        tertiary: "",
      },
    },
    hexas: ["silver", "silver", "silver"],
  },

  {
    id: 5,
    title: "BLIND CODING",
    subtile: `Coding with a twist`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

    desc : `
    It is a kind of fun event which also tests your skills on how well you understand what you
are writing on screen without seeing it. It consists of two members which provides a little
more trouble as you have to coordinate with your partner also and this will surely make you
learn how to work in a team`,

    rules: [
      `“Blind Coding” will be conducted onsite in BTKIT Dwarahat Campus.`,
      `It is a team event of two members`,
      `There will be two rounds, the prelims and the finals.`,
      `Each participant has to code for the problem statement, with the monitor off.`,
      `Participants whose code gets executed will be given higher preference.`,
      `The second preference will be given to code with the least number of errors.`,
      `In case of tie in number of errors then timing will be considered.`,
      `Shortlisted participants of prelims will appear for finals for which above rules are valid.`,
    ],

    cls: "blind",
    left: <Blind />,
    style: {
      color: {
        bg: "#159D8C",
        primary: "#93f9ed",
        secondary: "#93f9ed",
        tertiary: "",
      },
    },
    hexas: ["mint", "mint", "mint"],
  },

  {
    id: 6,
    title: "MATHEMATICA",
    subtitle: `Be a wise guy, Give math a try`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

    desc : `Speed!! Speed!! Speed!!
    Mathematica is a game of questions and answers on all problem solving aspects that is
    open for all. The event will typically be organized onsite. There will be several problems that
    need to be solved by participants.`,
    rules: [
      `“MATHEMATICA” will be conducted onsite in BTKIT Dwarahat Campus.`,
      `It is an individual event and teams aren’t allowed.`,
      `We only allow college students to participate and hence a certificate and prizes will be given to winners.`,
      `There will be only one round with some multiple choice questions.`,
      `Participants with maximum marks will be deemed the winner.`,
      `The decision of the jury remains final while deciding the winners for the same`,
    ],

    cls: "backtrack",
    left: (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
          className="logoDesign"
        >
          <img
            style={{ width: "100%" }}
            src={`${loc}/image/mathemati.png`}
            alt="LOGO "
          />
        </div>
      </>
    ),
    style: {
      color: {
        bg: "#FE74AE",
        primary: "#b71c1c",
        secondary: "#b71c1c",
        tertiary: "",
      },
    },
    hexas: ["red", "red", "red"],
  },

 

  {
    id: 8,
    title: "CICADA",
    subtitle: `Clear vision holds the key.`,
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

    desc: `It is a prestigious event which was started in Kaivalya 2018 with the purpose to engage
        other branches also to take part in the event. It is a cryptic treasure hunt in which
        participants will have to clear the levels using the clues provided.
        So get ready to engage in this race which leads to the treasure.`,

    rules: [
      `There can be only two members in a team at most.`,
      `As it is a cryptic treasure hunt, little information about cryptography will help you in
            clearing levels.`,
      `Further no rules.`,
    ],

    cls: "cicada",
    left: <Cicada />,
    style: {
      color: {
        bg: "#000",
        primary: "rgba(112, 106, 106, 0.861)",
        secondary: "rgba(82, 71, 71, 0.886)",
        tertiary: "",
      },
    },
    hexas: ["silver", "silver", "silver"],
  },
  {
    id: 7,
    title: "CSS Battle",
    venue: "CSE Department",
    date: "18 April 2022",
    time: "10 pm",
    coordinators: [
      {
        name: "Ayush Bisht",
        branch: "CSE",
        year: "3rd",
      },
      {
        name: "Mohd Anas",
        branch: "CSE",
        year: "3rd",
      },
    ],

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

    rules: [
      `“MATHEMATICA” will be conducted onsite in BTKIT Dwarahat Campus.`,
      `It is an individual event and teams aren’t allowed.`,
      `We only allow college students to participate and hence a certificate and prizes will be given to winners.`,
      `There will be only one round with some multiple choice questions.`,
      `Participants with maximum marks will be deemed the winner.`,
      `The decision of the jury remains final while deciding the winners for the same`,
    ],

    left: <CssBattle />,
    cls: "css-battle",
    style: {
      color: {
        bg: "#159D8C",
        primary: "#30CEF1",
        secondary: "#7FC468",
        tertiary: "",
      },
    },
    hexas: ["mint", "mint", "mint"],
  },
];

import Idea from "../components/svg/idea";
import CssBattle from "../components/svg/css.battle";
import Cicada from "../components/svg/cicada";
import LogoDesign from "../components/svg/logoDesign";

import Blind from "../components/svg/blind";
import MonkeyType from "../components/svg/monkey-type";

const loc = process.env.PUBLIC_URL;

export const Timeline = [
  {
    id: 1,
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

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

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

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

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
    id: 4,
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

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

    rules: [
      `“Gambit” will be hosted online on codechef.com or hackerearth.com.`,
      `It is a team event and a team can consist of up to 3 members`,
      `All team members need to register separately for Kaivalya and also need to have an account on codechef.com or hackerearth.com`,
      `We only allow college students to participate and hence a certificate from the college stating the enrolment of the team members needs to be issued and mailed to us in order for the team to claim prizes.`,
      `There will be some time penalty on wrong submission of problems.`,
      `Team solving the most number of problems in the least time will be the winner.`,
    ],

    cls: "cicada",
    left: <>
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
    id: 2,
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

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

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
    id: 7,
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

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

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
    id: 10,
    title: `KNOW YOUR BUDDY`,
    subtitle: `The more you know, the more you grow`,
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

    desc: `‘Know your buddy’ is a pursuit of trivial knowledge about your computer system, to
    encourage students to achieve excellence in learning the system properties which increases
    their connection with their system.
    The quiz is typically played with a lockout buzzer system between some numbers of teams,
    most commonly teams of two players each. The moderator reads questions to the teams,
    whose players endeavor to buzz first with the correct answer, scoring points for their team.`,

    rules: [
      `“Know your buddy” will be conducted onsite in BTKIT Dwarahat Campus.`,
      `It is a team event and a team can consist of up to 2 members.`,
      `We only allow college students to participate and hence a certificate and prizes will
        be given to winners.`,
      `There will be only one round in which some tasks are to be performed on their respective laptops to show how well they know their system.`,
      `Each task has marks associated with it and the team with maximum marks will be
      deemed the winner.`,
      `The decision of the jury remains final while deciding the winners for the same`
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



  {
    id: 8,
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

    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit non nisi repellendus deleniti magni accusantium, earum tenetur facilis sit, quaerat quasi atque nihil nemo vero, explicabo fugiat odit voluptatibus. Nihil, odit?",

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
    id: 9,
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
    id: 11,
    title: "TECH TALKS",
    subtitle: `Guidance is so much more important than speed`,
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

    desc: `Having an active alumni network is immensely beneficial to the students presently studying
    in the college.. “Young alumni and students can benefit in their professional lives by learning
    from senior alumni, getting to hear about interesting job opportunities, and so on.
    Computer Science is an immensely growing field and it’s changing everyday.So, events like
    this help us to keep ourselves updated.
    Networking is the key tool to growth in a resourceful career. Training and certification
    garnered from networking builds self-confidence and promotes self-esteem. The
    self-confidence that has been built over time can help put you on a positive spot whenever
    you interact with like minds in your career.
    So, This event will not only help us receive valuable guidance from professionals already in
    the industry but also help us develop a strong network and build an environment for coding
    and skill development`,

    rules: [

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
  {
    id: 12,
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

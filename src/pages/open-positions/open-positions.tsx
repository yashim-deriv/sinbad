import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ImageContainer, Header, Text } from 'components/containers/main'
import { ContainerWrapper } from 'components/containers/common/style'
import Sinbad0 from 'pages/open-positions/images/first-section.png'
import Background from 'images/common/homepage/carousel/background.png'
import RightArrow from 'pages/open-positions/images/arrow.png'
import Flex from 'components/containers/flex'
import device from 'themes/device'

type CardProps = {
    index?: number
}

type PositionsType = {
    id: string
    position?: string
    text?: string
    description?: string[]
    challenges?: string[]
    team?: string
    requirements?: string[]
    good_to_have?: string[]
}

export type JobTitleProps = {
    position: PositionsType
}

/* stylelint-disable */

const ContainersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    background-repeat: no-repeat;
    width: 100%;
`

const HeroWrapper = styled(ContainerWrapper)``

const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;

    @media ${device.laptopM} {
        flex-direction: column;
    }
`
const Image = styled.div`
    padding-left: 100px;
    display: flex;
    flex-direction: row;
    padding-top: 85px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 140px;

    @media ${device.laptopM} {
        margin-top: 100px;
        margin-bottom: 0px;
        align-items: center;
    }
`

const StyledHeader = styled(Header)`
    width: 100px;
`

const StyledText = styled(Text)`
    padding: ${(props) => props.padding || '5px 0'};
    text-transform: uppercase;
    font-family: 'Maven Pro Bold';
`

const PositionsCarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    align-items: center;
    padding-right: 60px;

    @media ${device.tablet} {
        padding-top: 20px;
        padding-right: 0;
    }
`

const PositionsCarousel = styled.div``

const Card = styled(Flex)<CardProps>`
    display: flex;
    max-width: 324px;
    height: 290px;
    padding: 30px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: white;
    margin: 20px;
    border-radius: 8px;
    justify-content: space-between;

    @media (max-width: 930px) {
        order: ${(props) => (props.index === 2 ? 1 : props.index === 1 ? 2 : props.index)};
        margin: 0 0 19px;
    }
`
const CardButtonContainer = styled(Link)`
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: var(--color-blue-3);
    padding: 5px;
`
const CardButton = styled.img`
    width: 10px;
    height: 10px;
`
const LinkContainer = styled(Link)`
    display: flex;
`

const StyledFlex = styled(Flex)`
    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`

const OpenPositionsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`

const OpenPositionsInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    align-self: start;
    padding-left: 31px;
    top: 10px;

    @media ${device.tablet} {
        display: none;
    }
`

export const positions: PositionsType[] = [
    {
        id: 'front-end-dev',
        position: 'Front-End Developer',
        text: 'We are seeking a talented Front-end Developer to create robust front-end systems for global fintech companies.',
        description: [
            'You’ll build powerful front-end systems with an improved user experience for our clients worldwide. You‘ll advocate for clients’ needs in the design and development of our applications, especially when implementing new products and features.',
        ],
        challenges: [
            'Find the balance between functional and aesthetic design, and create engaging user interfaces for all our products.',
            'Ensure our products are accessible across all platforms by optimising them for speed, scalability, and usability.',
            'Resolve web-development challenges by employing reusable components and the latest front-end frameworks.',
            'Offer our clients the best user experience by performing automated tests, troubleshooting issues, and making improvements.',
            '​Maintain clear and detailed technical design documentation according to our style guide.',
        ],
        team: 'You’ll be part of our Front-end team, where we build the client-side of our web applications by translating UI/UX design wireframes into a user-centric web experience. We advocate for our clients’ needs, and we collaborate with other teams to implement an engaging user interface for our trading platforms.',
        requirements: [
            'Hands-on experience with JavaScript, HTML, and CSS',
            'Good grasp of diverse testing and debugging methods',
            'Excellent spoken and written English communication skills',
        ],
        good_to_have: [
            'Good grasp of UI/UX design processes',
            'Experience in working with React library',
            'Experience with Git',
            'Working experience in open-source platforms like Linux',
            'Strong knowledge of technologies such as Mobx, Gatsby, WebSocket, and styled-components',
            '​Good understanding of back-end technologies',
        ],
    },
    {
        id: 'data-analyst',
        position: 'Data Analyst',
        text: 'We are looking for a Data Analyst to convert data into actionable insights for leading fintech companies to overcome complex business challenges.',
        description: [
            'You’ll provide insights by collecting, processing, analysing, and presenting data in a usable way. You’ll ensure data integrity and use data-driven techniques to acquire information to help draft business strategies. Your keen eye for detail and expertise in data analysis will be vital in converting data into actionable insights to solve complex business challenges.',
        ],
        challenges: [
            'Analyse business requirements and create a seamless data flow from the source.',
            'Maintain data integrity, identify and resolve data gaps, convert data for analysis purposes, and create business terminologies for the users.',
            'Work with other departments to recognise and understand the scope of potential problems and check the availability of relevant data to resolve them.',
            'Provide reporting and analysis solutions in the form of dashboards or alerts, and present them to stakeholders.',
            'Use data governance tools for data management and look for trends that can help make business decisions.',
        ],
        team: 'We are the Business Intelligence team. We lead the organisation in cultivating a data-driven culture as our company moves toward the future. We collect meaningful data and analytics to deeply understand our clients and build more valuable products and services. What we do is incredibly important in driving smart marketing decisions, optimising our business, and increasing profitability.',
        requirements: [
            'In-depth experience with reporting packages, SQL, programming (Python/R), and ETL',
            'Frameworks for data wrangling purposes',
            'Skills in data visualisation tools such as Tableau and Google Data Studio',
            'Analytical skills with the ability to transform data into optimal business decisions',
            'Solid background in statistics, mathematics, or engineering',
            'Strong communication and presentation skills',
            'Fluency in spoken and written English',
        ],
        good_to_have: [
            'Experience with Google Cloud Services (GCS) such as Google Cloud Storage (GCs) and',
            'BigQuery',
            'Quality experience in relational SQL, preferably with PostgreSQL',
            'Understanding the marketing domain of financial products and services',
        ],
    },
    {
        id: 'graphic-designer',
        position: 'Graphic Designer',
        text: 'We need a creative Graphic Designer to translate business requirements into captivating designs that will inform and motivate the audience to take action.',
        description: [
            'You’ll produce captivating designs that inform the audience and call them to action. With your keen eye for aesthetics, you will conceptualise creative solutions for visual challenges. You will play an essential role in building the user interface that brings our products and users together.',
        ],
        challenges: [
            'Develop the design rationale and explain visual choices to cross-functional teams verbally and visually.',
            'Produce high-quality visual designs, including icons, graphics, and marketing materials, for desktop, web, and mobile devices with various resolutions.',
            'Create designs that emphasise our brand, reflect our voice, and inject beauty and life into our products.',
            'Lay out mockups and wireframes for app screens and web pages. ',
            'Collaborate with the Copywriting team to create cohesive designs that will amplify the verbal message.',
            'Keep up with the latest trends and techniques in design, UI, and UX.',
        ],
        team: 'We are the Product Design team, a group of designers, researchers, and illustrators. We solve complex problems to create beautiful products with a seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.',
        requirements: [
            'BA/BS in Design (e.g. Human-computer Interaction, Graphic, Visual Communication, Product, or Industrial Design) or equivalent practical experience',
            'Experience with design systems that work across a complex product',
            'Interaction design sensibility',
            'Proficiency in Adobe Photoshop, Illustrator, InDesign, Sketch 3.0',
            'Strong core skills in establishing visual hierarchy, layout, typography, and colour effectively and using visual design to organise information and guide people through tasks',
            'Ability to create style guides to be used cross-functionally',
            'Excellent spoken and written English communication skills',
        ],
        good_to_have: ['', '', '', ''],
    },
    {
        id: 'data-engineer',
        position: 'Data Engineer',
        text: "We're looking for a detail oriented Data Engineer to convert data into analyses and practical recommendations for fast-paced, global fintech companies",
        description: [
            'You’ll be responsible for designing and developing applications for iOS and Android while working closely with the Product Development team to plan new app features. You will handle debugging and troubleshooting to improve mobile app functionality and create advanced applications.',
        ],
        challenges: [
            'Develop iOS and Android mobile applications, writing high-quality code and tests.',
            'Collaborate with cross-functional teams to analyse data and decide on the best strategies to improve customers’ interaction with our mobile apps.',
            'Prioritise information security and process maintenance throughout the mobile app lifecycle.',
            'Analyse, enhance, and support our existing mobile applications.',
            'Work closely with Quality Assurance, Design, and Product Management teams to build the best possible UX for our mobile apps.',
        ],
        team: 'We are the Product Design team, a group of designers, researchers, and illustrators. We solve complex problems to create beautiful products with a seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.',
        requirements: [
            'Experience in the Flutter framework or a keen eagerness to master it',
            'High proficiency and experience in one or more of the following programming languages: Java, Dart, ES6, Kotlin, Objective-C, or Swif',
            'Distinct competence in mobile app development for at least one platform',
            'In-depth understanding of design guidelines and patterns in the Android and iOS platforms and their differences',
            'Strong knowledge of the performance tools and optimisation techniques in Android or iOS SDKs',
            'Proven work experience as a mobile developer in Android and iOS',
            'Excellent spoken and written English communication skills',
        ],
        good_to_have: [
            'Demonstrable portfolio of released applications for iOS and Android',
            'Experience in implementing UI animations',
            'Experience in working with finance-related companies',
        ],
    },
    {
        id: 'flutter-developer',
        position: 'Flutter Developer',
        text: 'We are looking for a Flutter Developer to build advanced Android and iOS applications for fast-paced fintech companies.',
        description: [
            'You’ll be responsible for designing and developing applications for iOS and Android while working closely with the Product Development team to plan new app features. You will handle debugging and troubleshooting to improve mobile app functionality and create advanced applications.',
        ],
        challenges: [
            'Develop iOS and Android mobile applications, writing high-quality code and tests.',
            'Collaborate with cross-functional teams to analyse data and decide on the best strategies to improve customers’ interaction with our mobile apps.',
            'Prioritise information security and process maintenance throughout the mobile app lifecycle.',
            'Analyse, enhance, and support our existing mobile applications.',
            'Work closely with Quality Assurance, Design, and Product Management teams to build the best possible UX for our mobile apps.',
        ],
        team: 'We are the Product Design team, a group of designers, researchers, and illustrators. We solve complex problems to create beautiful products with a seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.',
        requirements: [
            'Experience in the Flutter framework or a keen eagerness to master it',
            'High proficiency and experience in one or more of the following programming languages: Java, Dart, ES6, Kotlin, Objective-C, or Swift',
            'Distinct competence in mobile app development for at least one platform',
            'In-depth understanding of design guidelines and patterns in the Android and iOS platforms and their differences',
            'Strong knowledge of the performance tools and optimisation techniques in Android or iOS SDKs',
            'Proven work experience as a mobile developer in Android and iOS',
            'Excellent spoken and written English communication skills',
        ],
        good_to_have: [
            'Demonstrable portfolio of released applications for iOS and Android',
            'Experience in implementing UI animations',
            'Experience in working with finance-related companies',
        ],
    },
    {
        id: 'motion-designer',
        position: 'Motion Designer',
        text: 'We are seeking a Motion Designer who uses motion to simplify complexity and improve the usability of fintech apps and websites.',
        description: [
            'You’ll define and create inventive motion designs for our products in collaboration with other designers and developers. You’ll bring innovative ideas to life on various platforms through your mastery of user interface animation, rapid prototyping, and motion studies. Your creations will elevate the motion experience of our clients and tell our brand story.',
        ],
        challenges: [
            'Shape the product narrative by creating UX motion behaviours, systems, and animations that simplify complexity and guide clients. ',
            'Create the motion design approach and strategy by converting early concepts, storyboards, and prototypes into final designs.',
            'Orient and delight clients by producing tutorials and promotional content for different platforms such as web, Android, iOS, and different devices such as laptops, mobiles, and tablets.',
            'Work with the product management team to deliver a motion design in line with the product’s objectives.',
        ],
        team: 'We are the Product Design team, a group of designers, researchers, and illustrators. We solve complex problems to create beautiful products with a seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.',
        requirements: [
            'Degree in computer science, design, or a related field',
            '3+ years of experience in motion design',
            'A portfolio that demonstrates experience in creating UI/UX user-centred solutions on various platforms and devices',
            'Skill in using motion graphics programs, such as Principle, Final Cut Pro, and After Effects',
            'The ability to narrate with the use of motion',
            'Familiarity with animation principles',
            'Fluency in spoken and written English',
        ],
        good_to_have: [
            'Team leading experience with insight into the future direction of the field',
            'Experience in dealing with motion latency issues',
            'Ability to blend art and coding to achieve engaging narrations',
            'Skill in noticing fine details in physics, patterns, and visual design',
            'Portfolio of early concepts as storyboarding sketches',
        ],
    },
    {
        id: 'quantitative-analyst',
        position: 'Quantitative Analyst',
        text: 'We are looking for a Quantitative Analyst to create business models helping fintech companies to mitigate risk and make sound business decisions.',
        description: [
            'You’ll design and create new trading products that will allow our clients to trade anything they desire. You’ll use mathematical and financial methods to develop derivatives pricing and risk management algorithms based on real-time market data, new events, and any such parameters impacting the underlying instruments. With your extensive financial knowledge and data analysis skills, you will create models that will help us mitigate risk, make sound business decisions, and introduce a new generation of trading products to the fintech world.',
        ],
        challenges: [
            'Apply mathematical models to real-world scenarios.',
            'Solve complex and abstract mathematical problems to optimise pricing and manage risk.',
            'Analyse trading patterns to identify new market opportunities.',
            'Develop derivatives pricing, as well as risk management models and algorithms.',
            'Review, develop, and enhance options pricing, volatility forecasts, and risk management programmes.',
            'Perform data mining using SQL databases and other analytical tools.',
            'Monitor trading activity across all of our platforms and minimise abuse.',
            'Generate periodic and special reports that summarise client trading trends.',
        ],
        team: 'We are the Trading team. We develop the underlying risk and pricing models that drive our products and enable customers to trade on our platforms. We are central to the profitability and success of the company. We track the company’s performance, mitigate risk, and provide useful, actionable insights that help us develop solid business strategies.',
        requirements: [
            'A university degree in physics, financial engineering, or mathematics',
            'Knowledge of probability theory, stochastic calculus, numerical methods, Monte-Carlo simulation, differential equations, econometrics, derivatives pricing, and statistical modelling',
            'Experience in a programming language such as Python, R, and SQL',
            'Excellent spoken and written English communication skills',
        ],
        good_to_have: [
            'Experience in using financial information sources such as Bloomberg and Reuters',
        ],
    },

    {
        id: 'ui-ux-designer',
        position: 'UI/UX Designer',
        text: 'We are seeking a UI/UX Designer who will transform complex concepts into intuitive, accessible, and user-friendly designs for fast-growing fintech companies.',
        description: [
            'You’ll inform the design of our websites and apps from the perspective of our end-user. You will have an in-depth understanding of the user requirements, and you will be involved in every aspect of the product development process. You’ll transform complex concepts into intuitive, accessible, and user-friendly designs.',
        ],
        challenges: [
            'Take broad, conceptual ideas and turn them into something useful and valuable for our clients.',
            'Translate concepts into wireframes, mockups, and prototypes that lead to an intuitive user experience.',
            'Help define the user model and interface for new and existing products and features.',
            'Create user personas, define user task flows and UI specifications, and run A/B tests to understand users’ behaviour and needs.',
            'Identify design problems and devise elegant solutions.',
            'Gauge the usability of new and existing products and make constructive suggestions for change.',
            'Take a user-centred design approach and rapidly test and iterate your designs.',
            'Give and solicit feedback from team members in order to continually raise the bar for quality.',
            'Work closely with other teams throughout the development of new products or features.',
            'Give our products a distinct and consistent visual identity, and ensure that it serves the needs of the end-user.',
            'Keep up with the latest trends and techniques in design, UI, and UX.',
        ],
        team: 'We are the Product Design team, a group of designers, researchers, and illustrators. We solve complex problems to create beautiful products with a seamless user experience. We test and iterate our designs while advocating for users throughout the product development cycle.',
        requirements: [
            'A bachelor’s degree in graphic design, interaction design, visual communication, multimedia, or the equivalent',
            'Proven UI and UX experience with a portfolio featuring examples of your design work',
            'Ability to conduct end-to-end UX research, including usability testing, and A/B testing',
            'Experience in interpreting complex concepts and processes to develop intuitive and logical user flows and usage scenarios',
            'Extensive experience in creating interactive UI elements for web and mobile apps',
            'Proficiency in designing intuitive and cohesive screens, pages, and visual elements that work as intended',
            'Proficiency in Photoshop, Illustrator, Sketch, and other design and wireframing software',
            'Knowledge of HTML, CSS, and JavaScript for rapid prototyping of websites and apps',
            'Excellent spoken and written English communication skills',
        ],
        good_to_have: ['Familiarity with front-end technologies'],
    },
    {
        id: 'back-end-dev',
        position: 'Back-End Developer',
        text: 'We are seeking a Back-end Developer to build automated tests and perform regular reviews to enhance code quality for top fintech companies.',
        description: [
            'You’ll design and develop reliable server-side apps and databases. By testing and debugging them, you make sure that issues are found and addressed in time. Our client base is growing rapidly, and so is the need to make our system and APIs more scalable. You will play an important role in making our platform scalable by transforming from monolithic to microservice-based architecture.',
            'You’re working with a supportive team who are ready to hear your thoughts, brainstorm when you want fresh ideas, and work with you when you need to delegate. We believe that everyone should be heard and respected. We are also firm believers in open communication, voicing and solving problems early, before they become major obstacles.',
            'Armed with your experience, supported by your team, and motivated by exciting projects, you’re all set for a successful career at Deriv.',
        ],
        challenges: [
            'Design, build, and maintain core components of applications for our customers, internal teams, and third-party developers.',
            'Help to take your code to production, troubleshoot any issues that arise, and own fixing any associated bugs.',
            'Build automated unit and integration tests and perform code reviews to improve the code quality.',
            'Participate in the deployment of new products and features by collaborating with other teams.',
            'Make codebases consistent and maintainable.',
        ],
        team: 'We are the Back-end team. We are responsible for designing, developing, testing, and debugging the company’s server-side apps and databases. In collaboration with the QA team, we investigate and resolve technical issues. We empower the Front-end team by providing the components and features that they need. We aspire to delight our customers with a flawless digital experience.',
        requirements: [
            'Expertise in any modern programming language',
            'Experience in Redis, Git, Docker, and familiarity with microservices and scalable systems',
            'Ability to produce high-quality, self-documenting code by using test-driven development (TDD) techniques',
            'Knowledge of information security and data protection',
        ],
        good_to_have: [
            'Experience with asynchronous programming and scalable systems',
            'Experience with relational database design and/or open-source RDBMS systems such as PostgreSQL or MySQL',
            'Background in Linux and other open-source platforms',
            'Fluency in spoken and written English',
        ],
    },
    {
        id: 'blockhain-dev',
        position: 'Blockchain Developer',
        text: 'We are seeking a Blockchain Developer who will help with the crypto-cashier system operations and blockchain-based projects for renowned fintech companies.',
        description: [
            'You’ll help with the operation of our existing crypto-cashier system and play a key role in our future blockchain-based projects. You will develop and maintain secure and efficient software to support our cryptocurrency payments. Your work will directly influence the core architecture that powers our high-traffic digital options trading website.',
        ],
        challenges: [
            'Design, build, and maintain core components of applications for our customers, internal teams, and third-party developers.',
            'Help to take your code to production, troubleshoot any issues that arise, and fix any associated bugs.',
            'Build automated unit and integration tests and perform code reviews to improve the code quality.',
            'Participate in deploying new products and features by collaborating with other teams.',
            'Make codebases consistent and maintainable.',
        ],
        team: 'We are the Blockchain Development team, committed to providing transformative solutions to cryptocurrency challenges, building decentralised applications using blockchain technology, and designing an effective architecture for our cryptocurrency transactions. We aim to create a secure and pleasing crypto-experience for our clients.',
        requirements: [
            'Thorough knowledge of payments with Bitcoin and Ethereum and familiarity with other cryptocurrencies',
            'Experience with Bitcoin or Geth RPC APIs',
            'Understanding of cryptography, including asymmetric, symmetric, hash functions, and encryption/signatures',
            'Familiarity with concepts such as blockchain confirmations, multisig, and HD wallets',
            'Knowledge of coloured coins and Ethereum tokens, including ERC20/23/223',
            'Knowledge of hashing algorithms, including SHA and scrypt',
        ],
        good_to_have: [
            'Experience with languages such as Perl, Python, PHP, C/C++, Go, Node.js, Rust, or Ruby',
        ],
    },
    {
        id: 'c-plus-plus-dev',
        position: 'C++ Developer',
        text: 'We are looking for a C++ Developer to run tests and applications and work with large codebases for rapidly growing fintech companies.',
        description: [
            'We’re a fast-paced company, where new products and projects are introduced all the time. To support this, we need a good foundation: fast, reliable, well-tested code that can either run directly on our servers — or on mobile/desktop/web clients. Each component is self-contained, but we encourage cross-team sharing of information and processes — your ideas might spark creativity in other projects.',
            'We recalculate 30 million data points in real-time, and our tech stack should support this volume. This isn’t a legacy codebase, either: expect to see C++20, coroutines and cutting-edge versions of Clang and GCC running on various platforms, including cross-compiled to WebAssembly. We’ve chosen C++ for its performance and portability but are also tracking the progress of such alternatives as Rust. In short, we adapt to new technologies when the need arises, and we need you to do the same, so come with a bold, can-do attitude to master our tech stack.',
            'You’ll be working with a team to build, maintain, and extend the high-performance C++ core features for pricing calculations,  automated trading execution algorithms, and platform integrations with key trading platforms such as MetaTrader 5.',
        ],
        challenges: ['', '', '', '', ''],
        team: '',
        requirements: ['', '', '', '', '', '', ''],
        good_to_have: ['', '', '', ''],
    },
    {
        id: 'mobile-app-dev',
        position: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
        description: [''],
        challenges: ['', '', '', '', ''],
        team: '',
        requirements: ['', '', '', '', '', '', ''],
        good_to_have: ['', '', '', ''],
    },
    {
        id: 'mobile-app-dev',
        position: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
        description: [''],
        challenges: ['', '', '', '', ''],
        team: '',
        requirements: ['', '', '', '', '', '', ''],
        good_to_have: ['', '', '', ''],
    },
]

const OpenPositions = () => {
    return (
        <>
            <ContainersWrapper>
                <HeroWrapper>
                    <PositionsHeader>
                        <HeaderContainer>
                            <Header
                                padding="20px 0px 20px 0px"
                                font_size="5rem"
                                text_transform="uppercase"
                                line_height="42px"
                            >
                                It Careers For
                            </Header>
                            <Header
                                padding="20px 0px"
                                font_size="5rem"
                                color="var(--color-sand-4)"
                                text_transform="uppercase"
                                line_height="42px"
                            >
                                Challenge
                            </Header>
                            <Header
                                padding="20px 0px 20px 0px"
                                font_size="50px"
                                text_transform="uppercase"
                            >
                                Seekers
                            </Header>
                        </HeaderContainer>
                        <Image>
                            <ImageContainer src={Sinbad0} width="auto" height="100%" />
                        </Image>
                    </PositionsHeader>
                </HeroWrapper>
            </ContainersWrapper>
            <OpenPositionsContainer>
                <ContainerWrapper>
                    <PositionsCarouselContainer>
                        <PositionsCarousel>
                            <StyledFlex width="760px" wrap="wrap">
                                {positions.map(({ position, text, id }, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            index={index}
                                            direction="column"
                                            ai="center"
                                            jc="start"
                                        >
                                            <Header
                                                color="var(--color-sand-4)"
                                                text_align="center"
                                                line_height="24px"
                                                padding="10px 0px"
                                            >
                                                {position}
                                            </Header>
                                            <Text font_size="14px" text_align="center">
                                                {text}
                                            </Text>
                                            <LinkContainer to={`/job-description/${id}`}>
                                                <Text
                                                    font_size="11px"
                                                    text_align="center"
                                                    width="50px"
                                                    padding="0px"
                                                    font_family="Maven Pro Bold"
                                                    text_transform="uppercase"
                                                >
                                                    More
                                                </Text>
                                                <CardButtonContainer to="/some-postition">
                                                    <CardButton src={RightArrow} />
                                                </CardButtonContainer>
                                            </LinkContainer>
                                        </Card>
                                    )
                                })}
                            </StyledFlex>
                        </PositionsCarousel>
                    </PositionsCarouselContainer>
                    <OpenPositionsInfo>
                        <StyledHeader padding="20px 0 0 0" text_transform="uppercase">
                            Open
                        </StyledHeader>
                        <StyledHeader
                            border_bottom="1px solid var(--color-sand-1)"
                            padding="25px 0"
                            text_transform="uppercase"
                        >
                            Positions
                        </StyledHeader>
                        <StyledText padding="25px 0 5px" text_transform="uppercase">
                            Back-end Development
                        </StyledText>
                        <StyledText text_transform="uppercase">Business Intelligence</StyledText>
                        <StyledText text_transform="uppercase">DevOps</StyledText>
                        <StyledText text_transform="uppercase">Quantitative</StyledText>
                        <StyledText text_transform="uppercase">Mobile app Development</StyledText>
                        <Header
                            color="var(--color-sand-4)"
                            font_size="18px"
                            font_weight="normal"
                            padding="25px 0"
                        >
                            and more...
                        </Header>
                    </OpenPositionsInfo>
                </ContainerWrapper>
            </OpenPositionsContainer>
        </>
    )
}

export default OpenPositions

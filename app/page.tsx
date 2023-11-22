'use client'
// *******************************************************************************************
//importation
// *******************************************************************************************
import { Center, 
  Image ,ChakraProvider, Container, VStack, Icon, Link, Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps, IconButton , Tabs, TabList, TabPanels, Tab, TabPanel , Button, ButtonGroup , Box, Heading, Text} from '@chakra-ui/react';

import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { space } from 'postcss/lib/list'
import React, { useState } from 'react';
//************************************************************************************************ */

//creation des fonctions
//***********************************************************************************//

export default function Home() {
/*pour creer un bouton qui télécharge le cv*/
 
    const handleDownload = () => {
      // Crée un lien <a> pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = 'image/CvS.pdf'; 
      link.download = 'CV_EID.pdf';
      
      // Ajoute le lien au DOM et le déclenche
      document.body.appendChild(link);
      link.click();
  
      // Nettoie le lien du DOM
      document.body.removeChild(link);
    };
  
    const handleDownload2 = () => {
      // Crée un lien <a> pour déclencher le téléchargement
      const link = document.createElement('a');
      link.href = 'image/Portfolio.pdf'; 
      link.download = 'portfolio_EID.pdf';
      
      // Ajoute le lien au DOM et le déclenche
      document.body.appendChild(link);
      link.click();
  
      // Nettoie le lien du DOM
      document.body.removeChild(link);
    };
  

// contenu experience
//Definition des composante experiences

const steps = [
  { title: 'Master 2 Mathémathique et Informatique',date:'2024', description: 'Parcours web Analyste - Université de Lille' },
  { title: 'Master 1 Mathémathique et Informatique',date:'2023', description: 'Parcours Web Analyste - Université de Lille' },
  { title: 'Licence Informatique',date:'2023', description: 'Université Jean Monnet Saint-Etienne' },
  { title: 'PSC1',date:'2023', description: 'Initiation aux premiers secours' },
]

const { activeStep } = useSteps({
  index: 1,
  count: steps.length,
})



const steps2 = [
  { title: 'Stage Devloppement web',date:'2023', description: '1001 clicks ' },
  { title: 'Service Civique',date:'2022', description: 'Mission local Saint-Etienne' },
  { title: 'Soirée jeu vidéo Melies',date:'2020', description: 'Melies Saint-Etienne' },
]




  const images = ['logo/css.jpg','logo/git.png','logo/html.png','logo/js.png','logo/nodejs.jpg','logo/pbi.jpg','logo/php.png','logo/python.png','logo/sf.jpg','logo/sql.png'];









// Affichage sur la page

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<div id="entete">
   <Image
    borderRadius='full'
    boxSize='80%'
    src='image/avatar.jpg'
    alt='Maryam EID'
  />


<h1>Maryam EID</h1>
</div>

<Tabs variant='soft-rounded' colorScheme='green' orientation='vertical'>
  <TabList id="menu">
    <Tab style={{ fontSize: '25px' }}>Acceuil</Tab>
    <Tab style={{ fontSize: '25px' }}>Contacts</Tab>
    <Tab style={{ fontSize: '25px' }}> Formations</Tab>
    <Tab style={{ fontSize: '25px' }}> Compétences</Tab>
    <Tab style={{ fontSize: '25px' }}> Experiences</Tab>
    <Tab style={{ fontSize: '25px' }}>Interêts</Tab>
  </TabList>

  <TabPanels>

{/* contenu de l'acceuil */}
    <TabPanel className="contenu">

     <div id="paragrapheAcceuil">
     <Heading  as="h1" mb={4} textAlign={'center'} color='lightcoral'>
        Étudiante en Master 2 Web Analyste
      </Heading>
    <Box id="bio" p={8} maxW="1200px" mx="auto"  justifyContent="space-between" >
      

      <Text mb={4} justifyContent="space-between">
        Je suis actuellement à la recherche d un stage de 6 mois à partir de février 2023.
        <br/>Mon domaine d expertise se concentre sur la data (Data Analyste, gestion de bases de données), le référencement naturel et la programmation Front-End.
        <br/> Au cours de mon cursus, j ai développé des compétences approfondies en programmation (HTML, CSS, JavaScript, SQLite) ainsi qu une forte aptitude au travail en groupe. Mon expérience en tant que volontaire en service civique a renforcé ma rigueur, ma prise d initiative et ma capacité à analyser des situations en vue d adopter une démarche d amélioration continue.
        <br/>L intégration au sein de votre entreprise représenterait pour moi l opportunité d appliquer mes connaissances techniques dans un contexte professionnel concret. Je recherche une entreprise qui favorise le dépassement de soi, qui me permette de perfectionner de nouvelles compétences et qui m accompagne dans la transition entre l étudiante que je suis et la professionnelle que je souhaite devenir.
        <br/>Si mon profil correspond à vos besoins, n hésitez pas à me contacter ! 
      </Text>

    </Box>



    </div>

        
      <div id="telechargement" onClick={handleDownload}>
      <Button colorScheme='blue' width={'220px'}>Télécharger le CV en PDF</Button>

      
    </div>  

    </TabPanel>

    {/* page de contact */}

    <TabPanel className="contenu">

      
    <ChakraProvider >
      <Container maxW="md" centerContent fontSize='30px'>
      <Box id="contact"  borderRadius="lg" p={4}>
        <VStack spacing={4} align="stretch">
          <Link href="tel:+33 768273332">
            <Icon as={FaPhone} boxSize={6} /> 
            <Text>07 68 27 33 32</Text>
          </Link>

          <Link href="eid.maryam@hotmail.com">
            <Icon as={FaEnvelope} boxSize={6} />
            <Text>eid.maryam@hotmail.com</Text>
          </Link>

          <Link href="https://www.linkedin.com/in/maryameid/" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
            <Text>https://www.linkedin.com/in/maryameid/</Text>
          </Link>
        </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  </TabPanel>


{/* contenu experience */}

    <TabPanel className="contenu">





    <Stepper index={activeStep} orientation='vertical' height='700px' colorScheme='red'gap=''>
      {steps.map((step, index) => (
        <Step key={index}>
          
          <StepIndicator>
            <StepStatus
              complete={<StepNumber/>}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.date}</StepDescription>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>

    </TabPanel>

{/* contenu compétences */}

    <TabPanel className="contenu">
    <Box id="competence" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
              {images.map((imageUrl, index) => (
                <Image key={index} src={imageUrl} alt={`Slide ${index + 1}`} maxH="130px" mx="4" my="2" marginTop='70px'/>
              ))}
            </Box>
    
    </TabPanel>
{/* contenu experiences */}
    <TabPanel className="contenu">

    <Stepper index={activeStep} orientation='vertical' height='700px' colorScheme='red' gap=''>
      {steps2.map((step, index) => (
        <Step key={index}>
          
          <StepIndicator>
            <StepStatus
              complete={<StepNumber/>}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.date}</StepDescription>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>



    </TabPanel>








  <TabPanel className="contenu">
  <Tabs variant='unstyled'>
  <TabList id="loisir">
    <Tab _selected={{ color: 'white', bg: 'lightcoral' }} style={{ fontSize: '25px' }}>Portfolio</Tab>
  </TabList>
  <TabPanels>
  

    <TabPanel >
      <p id='portfolio'>Pour plus de contenus :</p>
      <div id="telechargement2" onClick={handleDownload2}>
      <Button colorScheme='blue' width={'250px'}>Télécharger mon Portfolio.pdf</Button>
    </div>  
    </TabPanel>
  </TabPanels>
</Tabs>
    </TabPanel>








  </TabPanels>
</Tabs>



    </main>

)
  }

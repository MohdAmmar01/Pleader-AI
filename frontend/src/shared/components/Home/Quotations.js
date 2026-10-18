import React, { useEffect, useState } from "react";

export default function Quotations() {
  const [Quotation, setQuotation] = useState(
    "Laws are the pillars of society; they should support everyone, not just the roof."
  );

  const QuotationsList =[
    {
      quotation_text: "In the age of technology, the law should not be hidden behind jargon, but accessible to all."
    },
    {
      quotation_text: "Every keystroke in the name of legal tech brings law closer to the people."
    },
    {
      quotation_text: "The era of digital law will be the era of accessible justice."
    },
    {
      quotation_text: "Technology is not just a tool for lawyers, it's a bridge connecting law to the masses."
    },
    {
      quotation_text: "The power of law is not in its exclusivity, but in its accessibility."
    },
    {
      quotation_text: "A fair society is one where law is as accessible as technology."
    },
    {
      quotation_text: "The transformation of law through technology is a promise of justice to everyone."
    },
    {
      quotation_text: "Legal tech stands not just for innovation, but for inclusion."
    },
    {
      quotation_text: "Technology should not just advance law, but also expand its reach."
    },
    {
      quotation_text: "The scales of justice will tip towards equality when law and technology become one."
    },
    {
      quotation_text: "Legal tech's ultimate goal should be to bring the law from the courthouse to the living room."
    },
    {
      quotation_text: "In a world empowered by technology, the law should not remain in the confines of courtrooms."
    },
    {
      quotation_text: "When law leverages technology, justice becomes a service, not a privilege."
    },
    {
      quotation_text: "In the name of justice, we must infuse law with technology to ensure its reach to all."
    },
    {
      quotation_text: "A law that isn't accessible to all is a fortress, not a safeguard."
    },
    {
      quotation_text: "Through technology, the language of law must be translated to the language of the people."
    },
    {
      quotation_text: "Tech-empowered law is the first step towards an equal society."
    },
    {
      quotation_text: "The true potential of legal tech lies in its ability to democratize law."
    },
    {
      quotation_text: "When law is as accessible as technology, only then can it protect everyone."
    },
    {
      quotation_text: "If technology is the key, then the law must be a door anyone can open."
    },
    {
      quotation_text: "Just as technology has erased borders, it must also erase barriers to legal access."
    },
    {
      quotation_text: "When law meets technology, it should lead to justice, not just judgments."
    },
    {
      quotation_text: "In a digital world, analog law is a disservice to justice."
    },
    {
      quotation_text: "The role of technology in law is to illuminate, not to obfuscate."
    },
    {
      quotation_text: "The touch of technology can turn law from a maze into a clear path."
    },
    {
      quotation_text: "For a truly inclusive society, law must borrow from technology's playbook of accessibility."
    },
    {
      quotation_text: "Just as technology is for all, law must be for all."
    },
    {
      quotation_text: "Technology in law is not about replacing the human element, but about reaching more humans."
    },
    {
      quotation_text: "Technology should be the vehicle that brings law to the doorstep of every individual."
    },
    {
      quotation_text: "To harness the full power of legal tech, we must strive for accessibility, not just efficiency."
    },
    {
      quotation_text: "Technology can make law not just a voice, but an echo that reaches every corner."
    },
    {
      quotation_text: "Legal technology is the cornerstone of a legal system for all, by all."
    },
    {
      quotation_text: "In the marriage of law and technology, the offspring should be universal access."
    },
    {
      quotation_text: "Legal tech is not just about the future of law, but about the law for everyone."
    },
    {
      quotation_text: "As technology breaks barriers, so must the law."
    },
    {
      quotation_text: "Accessible law through technology is the best defense against injustice."
    },
    {
      quotation_text: "A society thrives when its laws are as accessible as its technologies."
    },
    {
      quotation_text: "When technology serves law, it doesn't just innovate, it equalizes."
    },
    {
      quotation_text: "Justice begins with the law but thrives with technology."
    },
    {
      quotation_text: "Every time technology empowers law, it empowers the people."
    },
    {
      quotation_text: "Just as technology has democratized information, so must it democratize law."
    },
    {
      quotation_text: "When the law is as accessible as technology, justice is no longer a distant horizon."
    },
    {
      quotation_text: "The evolution of law in the digital age should be towards inclusion."
    },
    {
      quotation_text: "The touch of technology can make law not a privilege, but a right."
    },
    {
      quotation_text: "Technology has the potential to bring down the walls around the legal world."
    },
    {
      quotation_text: "In a digital world, a digitized law is not a luxury but a necessity."
    },
    {
      quotation_text: "Technology can change the face of law, making it a mirror that reflects all of society."
    },
    {
      quotation_text: "Legal tech isn't just about convenience, it's about connectivity."
    },
    {
      quotation_text: "The true victory of technology in law is when justice is in everyone's reach."
    },
    {
      quotation_text: "In the era of technology, law must not be a locked chest but an open book."
    },
    {
      quotation_text: "When technology simplifies law, it doesn't just serve lawyers, but society."
    },
    {
      quotation_text: "Technology has a key role in ensuring law isn't just heard, but understood."
    },
    {
      quotation_text: "The marriage of law and technology must be a union of equal opportunity."
    },
    {
      quotation_text: "The power of legal tech lies in its ability to make law accessible, not complex."
    },
    {
      quotation_text: "Technology can be the bridge that connects the law to those who need it most."
    },
    {
      quotation_text: "A law that isn't accessible is a lion that doesn't roar."
    },
    {
      quotation_text: "Law and technology, together, can serve as the compass of equality."
    },
    {
      quotation_text: "In the courtroom of the future, technology ensures a seat for everyone."
    },
    {
      quotation_text: "Just as technology creates opportunities, it should create access to justice."
    },
    {
      quotation_text: "The evolution of law in the digital era is not just about speed, but about reach."
    },
    {
      quotation_text: "Technology should not just modernize the law, but humanize it."
    },
    {
      quotation_text: "The rise of legal tech is not just a trend, but a revolution in access."
    },
    {
      quotation_text: "The goal of technology in law is not just to advance, but to expand."
    },
    {
      quotation_text: "When technology touches law, it should leave fingerprints of fairness."
    },
    {
      quotation_text: "Just as technology empowers, so must it enable access to law."
    },
    {
      quotation_text: "Technology should not just navigate the legal system, but pave new paths to it."
    },
    {
      quotation_text: "In the digital age, the voice of law should be amplified for all to hear."
    },
    {
      quotation_text: "Technology's greatest promise in law is inclusivity, not just innovation."
    },
    {
      quotation_text: "When the law is coded with technology, it should be written in a language everyone can understand."
    },
    {
      quotation_text: "Legal tech is not just the future, but the foundation of an accessible legal system."
    },
    {
      quotation_text: "The spirit of law is justice, and the spirit of technology is accessibility; together, they can reshape society."
    },
    {
      quotation_text: "Legal tech can transform law from a riddle into a roadmap."
    },
    {
      quotation_text: "When the law is woven with technology, it should weave a safety net for all."
    },
    {
      quotation_text: "Technology in law is not just about faster decisions, but about fairer access."
    },
    {
      quotation_text: "The digital revolution in law should be a revolution for all, not just a few."
    },
    {
      quotation_text: "Just as technology connects us, it should connect us to justice."
    },
    {
      quotation_text: "In a connected world, law must not be an isolated island."
    },
    {
      quotation_text: "Technology can ensure that law is not a ladder for a few, but an escalator for all."
    },
    {
      quotation_text: "The true essence of technology in law is to facilitate, not complicate."
    },
    {
      quotation_text: "When law embraces technology, it embraces everyone."
    },
    {
      quotation_text: "In the world where technology is ubiquitous, so must be the law."
    },
    {
      quotation_text: "Legal technology should not just innovate, but integrate everyone."
    },
    {
      quotation_text: "In the digital age, the law should be a click, not a maze."
    },
    {
      quotation_text: "A digitized law is a democratized law"
    },
    {
      quotation_text: "Legal tech can shine a light on the path to justice for everyone."
    },
    {
      quotation_text: "When law sails on the sea of technology, it sails towards universal accessibility."
    },
    {
      quotation_text: "The mission of technology in law is not just progress but inclusivity."
    },
    {
      quotation_text: "Technology is not just a change-maker in law but a bridge-builder."
    },
    {
      quotation_text: "The intersection of law and technology is the crossroads to justice for all."
    },
    {
      quotation_text: "In the age of AI, the law must evolve from artificial intelligence to accessible intelligence."
    },
    {
      quotation_text: "When technology transforms law, it must also translate it for everyone."
    },
    {
      quotation_text: "The use of technology in law should not just be about legal aid, but about universal aid."
    },
    {
      quotation_text: "In the pursuit of legal tech, let's not forget that the destination is universal legal access."
    },
    {
      quotation_text: "Technology has a duty to drive the law towards equal access."
    },
    {
      quotation_text: "The law, empowered by technology, should be a shield available to all."
    },
    {
      quotation_text: "The future of law is not just digital but accessible."
    },
    {
      quotation_text: "In the evolution of law through technology, let justice be the compass that guides us."
    },
    {
      quotation_text: "A world where technology is in everyone's hands is a world where law should be in everyone's reach."
    },
    {
      quotation_text: "Technology is not just a pathfinder in law, but an equalizer."
    },
    {
      quotation_text: "In the symphony of law and technology, let the loudest note be accessibility."
    },
    {
      quotation_text: "Lawmakers are the sculptors of society; their work should reflect the image of all, not just a few."
    },
    {
      quotation_text: "The canvas of the law should be painted with the colors of every individual\u00e2\u20ac\u2122s needs."
    },
    {
      quotation_text: "Laws should serve as lighthouses, guiding every citizen towards the shores of justice."
    },
    {
      quotation_text: "The mirror of law should reflect the face of every citizen, not just the privileged."
    },
    {
      quotation_text: "In the marketplace of ideas, lawmakers should be the voice of the voiceless."
    },
    {
      quotation_text: "A good law is like a good teacher - it serves everyone equally and without prejudice."
    },
    {
      quotation_text: "The seed of every law should be planted with the future generations in mind."
    },
    {
      quotation_text: "In drafting laws, the echo of every voice should be heard, not just the loudest."
    },
    {
      quotation_text: "A society thrives when its laws are made not for the powerful, but for the powerless."
    },
    {
      quotation_text: "The cornerstone of every law should be the welfare of the many, not the interests of the few."
    },
    {
      quotation_text: "Laws should be like bridges, connecting people to justice, not barriers preventing them."
    },
    {
      quotation_text: "In crafting laws, remember, the pen is mightier when it writes for all."
    },
    {
      quotation_text: "The best laws are those that serve not just the present, but also the future."
    },
    {
      quotation_text: "Lawmakers should weave the fabric of law with threads of equality and justice."
    },
    {
      quotation_text: "In the garden of society, lawmakers are the gardeners, cultivating fairness and justice for all."
    },
    {
      quotation_text: "A law is a promise; it must deliver justice to everyone, not just those who can afford it."
    },
    {
      quotation_text: "The measure of a good law is not in its complexity, but in its fairness."
    },
    {
      quotation_text: "Laws should be designed as stepping stones to a better society, not stumbling blocks."
    },
    {
      quotation_text: "Good lawmaking is like good parenting - considering the needs of all and planning for the future."
    },
    {
      quotation_text: "In shaping laws, let's not forget that our real clients are the people, not power."
    },
    {
      quotation_text: "Every law is a brick in the edifice of society; it must support everyone, not just a select few."
    },
    {
      quotation_text: "Lawmakers are the architects of our future; every law should be a blueprint for progress."
    },
    {
      quotation_text: "Laws should not just respond to today's problems but also anticipate tomorrow's challenges."
    },
    {
      quotation_text: "The ink of law should be infused with the spirit of justice and equality."
    },
    {
      quotation_text: "In the labyrinth of lawmaking, let the compass be the common good."
    },
    {
      quotation_text: "Laws are the pillars of society; they should support everyone, not just the roof."
    },
    {
      quotation_text: "In the concert of society, every law should play a note of harmony."
    },
    {
      quotation_text: "The pulse of every law should beat with the rhythm of societal needs."
    },
    {
      quotation_text: "Laws should be crafted not just with the mind, but with the heart."
    },
    {
      quotation_text: "The best laws are the ones that echo in the lives of the common people."
    },
    {
      quotation_text: "Lawmakers should navigate the ship of law, not by the stars of power, but by the compass of justice."
    },
    {
      quotation_text: "The road to a fair society is paved with laws that serve everyone."
    },
    {
      quotation_text: "In the chess game of society, laws should be the moves that protect the weakest pieces."
    },
    {
      quotation_text: "Lawmakers should be the voice of the future, not just the echo of the past."
    },
    {
      quotation_text: "Laws should be the bridges to the future, not walls of the past."
    },
    {
      quotation_text: "Good laws are those that cultivate the seed of justice in every corner of society."
    },
    {
      quotation_text: "Every law should be a step towards a future where justice is the norm, not the exception."
    },
    {
      quotation_text: "The law should not be a fence that restricts, but a pathway that guides."
    },
    {
      quotation_text: "A fair society is built not just with laws, but with laws that are fair to all."
    },
    {
      quotation_text: "Every law should be a stone that helps build a society of justice and equality."
    },
    {
      quotation_text: "In the book of law, every page should speak of justice and fairness."
    },
    {
      quotation_text: "Lawmakers are the weavers of society\u00e2\u20ac\u2122s fabric; every law should be a thread that binds us together."
    },
    {
      quotation_text: "The art of lawmaking lies in ensuring the laws serve the symphony of society, not a single note."
    },
    {
      quotation_text: "The true North Star for every law should be the compass of societal well-being."
    },
    {
      quotation_text: "A law is a promise to the future, it must not be broken by the present."
    },
    {
      quotation_text: "In the recipe of a fair society, every law should be a pinch of justice."
    },
    {
      quotation_text: "Laws should be the vehicle driving society towards a more just future."
    },
    {
      quotation_text: "Lawmakers are the custodians of the future; every law should be a seed sown for generations to come."
    },
    {
      quotation_text: "In the symphony of society, every law should strike a chord of fairness and justice."
    }
  ]
  
  useEffect(() => {
    const timer = setInterval(() => {
      getRandomQuotation();
    }, 20000); // 20 seconds

    return () => {
      clearInterval(timer);
    };
  }, [Quotation]);

  const getRandomQuotation = () => {
    const randomIndex = Math.floor(Math.random() * QuotationsList.length);
    const randomQuotation = QuotationsList[randomIndex].quotation_text;
    setQuotation(randomQuotation);
  };

  return <>{Quotation}</>;
}

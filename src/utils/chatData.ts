
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const getSampleQuestions = (): string[] => [
  "What are my rights if I'm arrested in India?",
  "How does the Consumer Protection Act in India protect online shoppers?",
  "What is the difference between IPC and CrPC in Indian law?",
  "What are the grounds for divorce under Hindu Marriage Act?",
  "How can I file an RTI application in India?",
  "What legal documentation is required to start a business in India?",
];

export const getInitialMessages = (): ChatMessage[] => [
  {
    id: '1',
    role: 'assistant',
    content: "Namaste, I'm Smart Analyser, your Indian legal information assistant. I can help answer questions about Indian laws, legal procedures, and rights. What legal topic can I assist you with today?",
    timestamp: new Date(),
  },
];

export const getSampleResponses = (question: string): string => {
  const responses: Record<string, string> = {
    "What are my rights if I'm arrested in India?": 
      "If arrested in India, you have several fundamental rights under Article 22 of the Constitution and CrPC provisions: 1) Right to know the grounds of arrest, 2) Right to inform a friend/relative about your arrest, 3) Right to be presented before a magistrate within 24 hours, 4) Right to consult and be defended by a lawyer of your choice, 5) Right to remain silent, 6) Right to free legal aid if you cannot afford a lawyer, 7) Right to be treated with dignity and not be subjected to torture or cruel treatment, and 8) Right to apply for bail. Remember, these rights apply even if arrested without a warrant.",
    
    "How does the Consumer Protection Act in India protect online shoppers?":
      "The Consumer Protection Act, 2019 (which replaced the 1986 Act) specifically addresses e-commerce transactions in India. It protects online shoppers by: 1) Recognizing e-commerce transactions explicitly, 2) Establishing liability of platforms for unfair trade practices, 3) Prohibiting unfair contracts and misleading advertisements, 4) Creating a Central Consumer Protection Authority (CCPA) with powers to recall products and impose penalties, 5) Allowing consumers to file complaints electronically from anywhere, 6) Introducing mediation as an alternate dispute resolution mechanism, and 7) Provisions against sharing personal data without consent. E-commerce platforms must disclose seller details, terms of contract, and provide equitable service conditions.",
    
    "What is the difference between IPC and CrPC in Indian law?":
      "The Indian Penal Code (IPC) and Code of Criminal Procedure (CrPC) serve different functions in the Indian legal system: IPC is substantive law that defines crimes and prescribes punishments (what constitutes a crime), while CrPC is procedural law that establishes the process for investigating and trying criminal cases (how to deal with a crime). The IPC was enacted in 1860 and defines offenses like theft, murder, etc., with their punishments. The CrPC was enacted in 1973 and outlines procedures for arrest, investigation, trial, and appeals. Together, they form the foundation of criminal justice in India, with IPC defining 'what' is punishable and CrPC explaining 'how' to proceed with criminal cases.",
    
    "What are the grounds for divorce under Hindu Marriage Act?":
      "Under the Hindu Marriage Act, 1955 (as amended), the following are the grounds for divorce: 1) Adultery, 2) Cruelty (mental or physical), 3) Desertion for a continuous period of at least two years, 4) Conversion to another religion, 5) Unsoundness of mind/mental disorder, 6) Incurable/communicable disease, 7) Renunciation of the world (entering religious orders), 8) Presumption of death (missing for at least 7 years), 9) No resumption of cohabitation after a decree of judicial separation for one year or more, 10) Failure to comply with a decree of restitution of conjugal rights, 11) Mutual consent (after living separately for one year), and 12) For wife specifically: if the husband is guilty of rape, sodomy, or bestiality, or if the marriage was solemnized before she turned 18 and she repudiates it before turning 20.",
    
    "How can I file an RTI application in India?":
      "To file an RTI (Right to Information) application in India: 1) Write a simple application in English, Hindi, or local official language stating 'I would like to seek information under RTI Act 2005' followed by your specific questions, 2) Address it to the Public Information Officer (PIO) of the relevant government department, 3) Pay the application fee (₹10 for central government; varies for state governments), 4) Include your name, contact details, and signature, 5) Submit in person, by post, or online through rtionline.gov.in for central government departments or state RTI portals. No fee applies for BPL applicants (attach proof). The authority must respond within 30 days. If denied or unsatisfied, you can file a first appeal within 30 days, and a second appeal to the Information Commission within 90 days of receiving the first appeal decision.",
    
    "What legal documentation is required to start a business in India?":
      "The legal documentation required to start a business in India depends on the business structure, but generally includes: 1) For Sole Proprietorship: PAN, Aadhaar, business name registration (optional), 2) For Partnership: Partnership deed, firm registration under Partnership Act, PAN for firm, 3) For LLP/Private Limited: Digital Signature Certificate (DSC), Director Identification Number (DIN), LLP/company incorporation through SPICe+ form, Memorandum of Association, Articles of Association, 4) Common requirements for all: GST registration (mandatory if turnover exceeds ₹40 lakhs for goods or ₹20 lakhs for services), shop and establishment registration, professional tax registration, business license from local municipal corporation, industry-specific licenses (e.g., FSSAI for food, AYUSH for medicine). Additionally, businesses may need Udyam registration for MSME benefits, ESI/PF registration if employing workers, and IEC code for import-export activities.",
  };

  // Extended responses for a few more common legal queries
  const extendedResponses: Record<string, string> = {
    ...responses,
    "What is Section 420 of IPC?": 
      "Section 420 of the Indian Penal Code deals with cheating and dishonestly inducing delivery of property. It states that whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter, or destroy a valuable security or anything signed or sealed which may be converted into a valuable security, shall be punished with imprisonment for up to 7 years and shall also be liable to fine. It's commonly referenced in popular culture and is one of the most well-known sections of the IPC. To prove an offense under Section 420, there must be: 1) intention to deceive, 2) dishonest inducement to deliver property or alter a valuable security, and 3) actual damage or harm caused.",
    
    "How does the Motor Vehicles Act handle hit-and-run cases?":
      "The Motor Vehicles Act, 1988 (as amended in 2019) addresses hit-and-run cases under Section 161. When the driver or owner of the vehicle cannot be traced, victims or their legal representatives can claim compensation from the Solatium Fund established by the government. For death, the compensation is ₹2 lakh, and for grievous injury, it's ₹50,000. Additionally, the Criminal Law (Amendment) Act, 2023 has introduced Section 104A in the IPC specifically for hit-and-run, with stricter punishments of up to 10 years imprisonment and fine for drivers who flee after causing an accident. To claim compensation, the victim or family must file an application with the Claims Tribunal within 6 months of the accident, provide police report evidence, and establish that it was indeed a hit-and-run case.",
    
    "What are my tenant rights in India?":
      "Tenant rights in India are primarily governed by state-specific Rent Control Acts and the new Model Tenancy Act, 2021 (though states need to adopt it). General tenant rights include: 1) Right to a written rental agreement with clear terms, 2) Right to peaceful possession without landlord's interference, 3) Right to essential services like water and electricity, 4) Right to timely maintenance and repairs (for structural issues), 5) Right to recover excess rent charged beyond legal limits, 6) Right to notice period before eviction (typically 30-90 days depending on state laws), 7) Protection against arbitrary eviction without due process, 8) Right to recover security deposit (timeframe varies by state), and 9) Right to receipt for rent payments. However, tenants must also fulfill obligations like paying rent on time, maintaining the property, and using it only for the agreed purpose. Dispute resolution now encourages approaching Rent Authorities/Tribunals established under tenancy laws.",
  };

  // Combine both response sets
  const allResponses = { ...responses, ...extendedResponses };

  return allResponses[question] || "I don't have specific information on this aspect of Indian law yet. For accurate legal advice tailored to your situation, please consult a qualified advocate or legal advisor.";
};

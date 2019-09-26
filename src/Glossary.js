import React, { Component } from 'react';
import Navigater from './nav';
import FooterStatic from './components/footer/footer';


class Glossary extends Component { 

    
    
    
    ContentFunc = () => {
        const Base = (<>
        <p>This is a glossary of terms relating to SAEON's Global Change Data Centre. SAEON makes use of the<a href="https://public.ccsds.org/Pubs/650x0m2.pdf" target="_blank"> Open Archival Information System (OAIS)</a>, developed by <a href="https://public.ccsds.org/default.aspx" target="_blank">The Consultative Committee for Space Data Systems (CCSDS)</a>, as a best-practice standard to work towards. We therefore use the defined terminology in the OAIS to describe the actors and processes relating to our repository. </p>
                        <div className="gcdcTabs">
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">AIP (Archival Information Package)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    This is a package containing data and the metadata that describes it. It is created by a data curator from the Submission Information Package supplied by the Data Provider, with the addition of any necessary format migrations or additional information added to the metadata.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">BioEnergy Atlas<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The <a href="http://bea.dirisa.org/" target="_blank">BioEnergy Atlas for South Africa</a> is coordinated by SAEON and is a public resource to support the development of BioEnergy in South Africa. It covers assessment of biomass potential in the country and the feasibility of its application. Aimed at policy makers, national, regional and local governments, and at researchers and the consulting industry, the flexible, collaborative platform and open access licenses will stimulate use of the resource and continued expansion of the knowledge in this domain.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">Data Agreement<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    This is an agreement written by SAEON to be signed by both Data Providers and SAEON detailing the responsibilities of both parties with regards to data archiving and publishing.  Certain conditions will need to be agreed to by the Data Provider in order for SAEON to agree to archive their data and the data will need to be shared under a <a href="https://creativecommons.org/" targete="_blank">Creative Commons license</a>.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">Data Consumers<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The end users of the data in the SAEON GCDC.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">Data Providers<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The people and organisations who are submitting data to be archived and published in the ODP or in the SAEON GCDC.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">DIP (Dissemination Information Package)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    This is the package of data and metadata that is downloaded from the GCDC or sent to Data Consumers on request.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">GCDC (Global Change Data Centre)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The SAEON Global Change Data Centre (GCDC) houses datasets that support the understanding of, mitigation of, or adaptation to global change.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">MIMS (Marine Information Management System<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    <a href="http://data.ocean.gov.za/pub/DATA/" target="_blank">Marine Information Management System (MIMS)</a>. SAEON’s uLwazi node provides services to the <a href="http://data.ocean.gov.za/pub/DATA/" target="_blank">Department of Environmental Affairs (DEA)</a> in respect of implementation, maintenance and improvement of MIMS. The System is comprised of the software and hardware implementations, the personnel and standard operating procedures which support the functions necessary to promote the long-term preservation and maximise the scientific utility of ocean and coastal data in South Africa. MIMS operates the <a href="http://data.ocean.gov.za/pub/DATA/" target="_blank">Southern African Data Centre for Oceanography (SADCO)</a>, an Intergovernmental Oceanographic Commission-recognised Oceanographic Data Centre, which fills both a national and a regional role; MIMS also serves as a component of the <a href="http://data.ocean.gov.za/pub/DATA/" target="_blank">National Oceans and Coastal Information Management System (OCIMS)</a>. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">NRF (National Research Foundation)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The mandate of the <a href="https://www.nrf.ac.za/" target="_blank">National Research Foundation (NRF)</a> is to promote and support research through funding, human resource development and the provision of the necessary research facilities in order to facilitate the creation of knowledge, innovation and development in all fields of science and technology, including indigenous knowledge, and thereby contribute to the improvement of the quality of life of all South Africans. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">OAIS (Open Archival Information System)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    SAEON makes use of the <a href="https://public.ccsds.org/Pubs/650x0m2.pdf" target="_blank">Open Archival Information System (OAIS)</a>, developed by <a href="https://public.ccsds.org/default.aspx" target="_blank">The Consultative Committee for Space Data Systems (CCSDS)</a>, as a best-practice standard to work towards. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">ODP (Open Data Platform)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The Open Data Platform is SAEON’s system of systems that includes a number of data and metadata infrastructures and community portals that are customised for particular stakeholder communities. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">PAIA (Promotion of Access to Information Act, 2 of 2000)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    This is an Act that is in place to enable the constitutional right to access information held by the State. SAEON is a Business Unit of the National Research Foundation (NRF) and the overarching PAIA information for the NRF can be found on the <a href="https://www.nrf.ac.za/information-resources/paia-information" target="_blank">NRF's website</a>. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">POPI (Protection of Personal Information Act, 4 of 2013)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The POPI Act aims to promote the protection of personal information processed by public and private bodies and to introduce certain conditions so as to establish minimum requirements for the processing of personal information. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">PDI (Preservation Description Information)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    This is the metadata record that provides the necessary information to archive, publish and re-use the data it describes. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SADCO (Southern African Data Centre for Oceanography)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    <a href="http://sadco.csir.co.za/" target="_blank">The Southern African Data Centre for Oceanography (SADCO)</a> stores, retrieves and manipulates multi-disciplinary marine information from the areas around Southern Africa. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SAEON (South African Environmental Observation Network)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    <a href="http://www.saeon.ac.za/" target="_blank">The South African Environmental Observation Network (SAEON)</a> is a business unit of the NRF and serves as a national platform for detecting, translating and predicting environmental change through scientifically designed observation systems and research. SAEON also captures and makes long-term datasets freely accessible, and runs an education outreach programme. SAEON has six nodes dispersed geographically across the country. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SAEOSS (South African Earth Observation System of Systems)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    <a href="http://saeos.dirisa.org/" target="_blank">The South African Earth Observation System of Systems (SAEOSS)</a> portal offers the South African Earth observations community the opportunity to discover, access and eventually analyse Earth observations datasets. 
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SARVA (South African Risk and Vulnerability Atlas)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    SAEON was appointed to manage and execute work in relation to the South African Risk and Vulnerability Atlas (SARVA). As part of this task, SAEON has now updated the web-based resources available to practitioners in the field, and made significant progress in sourcing or producing new and more detailed datasets, providing updated tools for Impact Assessment, and linking SARVA to other relevant systems in the landscape, such as the National Climate Change Response Database managed by DEA, and the Declared Disasters database provided by NDMC. SARVA is integrated into the SAEON Open Data Platform (ODP), and as a result shares metadata and data directly with other initiatives, such as the South African Spatial Data Infrastructure (SASDI), the National Spatial Planning Data Repository (NSPDR), BioEnergy Atlas, The National Oceans and Coastal Information Management System (OCIMS), and similar.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SASDI (South African Spatial Data Infrastructure)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    <a href="http://www.sasdi.net/" target="_blank">The South African Spatial Data Infrastructure (SASDI)</a> is an initiative of the South African government that makes policies and technical standards on the use of spatial information. It also seeks to facilitate the capture, management, maintenance, integration, distribution and use of spatial information in South Africa.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SIP (Submission Information Package)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    This is the package of data, and sometimes metadata, that the Data Provider sends to SAEON for archiving and publishing.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">SANReN (South African Research Network)<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    <a href="https://www.sanren.ac.za/" target="_blank">The South African National Research Network (SANReN)</a> is a high-speed network dedicated to science, research, education and innovation traffic and has been rolled-out in a phased manner since 2007.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">Spatial Data Infrastructure Act, 54 of 2003<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The Spatial Data Infrastructure Act sets out the establishment of the South African Spatial Data Infrastructure, the Committee for Spatial Information and an electronic metadata catalogue. It aims to provide for the establishment of standards and prescriptions for the facilitation of the sharing of spatial information, the capture and publishing of metadata and to avoid duplication.
                                    </div>
                                </div>
                            </div>
                            <div className="gcdcTab">
                                <div className="gcdcTabTitle">uLwazi<em className="fa fa-chevron-right"></em></div>
                                <div className="gcdcTabContent">
                                    <div className="gcdcTabContentInner">
                                    The uLwazi node is one of the seven nodes of the South African Environmental Observation Network (SAEON). uLwazi means ‘knowledge’ in Nguni languages. The SAEON uLwazi node is made up of four teams, Infrastructure Management, Systems Development, Data Curation and Data Science, which provide infrastructure and support, development, curation and data science services to SAEON and external organisations. uLwazi hosts and develops data systems, which are distributed on an Open Data Platform (ODP), and online tools for research data infrastructure and associated decision making. The purpose of the ODP is to promote open science and satisfy funder requirements through the publication of data and scientific evidence. The node curates and links a wide range of South African datasets relevant to long-term global change monitoring, including the South African Risk and Vulnerability Atlas (SARVA) and the National Climate Change Information System (NCCIS). The node’s stakeholders include research institutions, government departments and NGOs. The primary data systems are developed for projects funded by the National Research Foundation (NRF), the Department of Science and Technology (DST), the Department of Rural Development and Land Reform (DRDLR) and the Department of Environmental Affairs (DEA).
                                    </div>
                                </div>
                            </div>
                        </div>
                      </>)

        return Base;                      
    }
    
    render() {
        return (
            <div>
                <div className="animateReverse">
                 <Navigater />
                    <div className="container-fluid bg-white">
                       <div className="container gcdc-content pt4">
                        <h1 className="gcdcHeader">Glossary</h1>
                        { this.ContentFunc() }
                        </div>
                    </div>
                    <FooterStatic />
                    
                </div>
            </div>
            )
    }
}

export default Glossary;
//Database
const contacts = {
    Administration: [
        {
            Name: "Dr. A. M. Rawani",
            Designation: "Director",
            Department: "",
            Email: "director@nitrr.ac.in",
            Mobile: "0771-2254600"
        },
        {
            Name: "Dr. Arif Khan",
            Designation: "Registrar",
            Department: "",
            Email: "registrar@nitrr.ac.in",
            Mobile: "0771-2252700"
        },
        {
            Name: "Dr. Shirish Verma",
            Designation: "Dean Academics",
            Department: "Department of Electronics & Telecommunication Engineering",
            Email: "shrishverma@nitrr.ac.in",
            Mobile: 9755574795
        },
        {
            Name: "Dr. Prabhat Diwan",
            Designation: "Dean Student Welfare",
            Department: "Department of Applied Geology",
            Email: "	pdiwan.geo@nitrr.ac.in",
            Mobile: 9479221399
        },
        {
            Name: "Dr. S. Sanyal",
            Designation: "Dean Faculty Welfare",
            Department: "Mechanical Engineering Department",
            Email: "dsanyal.arch@nitrr.ac.in",
            Mobile: 9826425326
        },
        {
            Name: "Dr. S. Gupta",
            Designation: "Dean Research & Consultancy",
            Department: "Department of Electrical Engineering",
            Email: "sgupta.ele@nitrr.ac.in",
            Mobile: 9993244929
        },
        {
            Name: "Dr. R. K. Tripathi",
            Designation: "Dean Planning & Development",
            Department: "Department of Civil Engineering",
            Email: "",
            Mobile: "9425510039"
        },
        {
            Name: "Dr. Sadhana Agrawal",
            Designation: "Chief Warden - Girl's Hostel",
            Department: "",
            Email: "sagrawal.phy@nitrr.ac.in",
            Mobile: 9993885860 
        },
        {
            Name: "Dr. Manoj Pradhan",
            Designation: "Chief Warden - Boy's Hostel",
            Department: "",
            Email: "",
            Mobile: 9826540711
        },
        {
            Name: "Dr. Sanjeev Pandey",
            Designation: "Sr. Medical Officer - Dispensary",
            Department: "",
            Email: "",
            Mobile: 8889838150
        },
        {
            Name: "Student Section",
            Designation: "",
            Department: "",
            Email: "",
            Mobile: 9981544944
        }
        
    ],
    AppliedGeology: [
        {
            Name: "Dr. Prabhat Diwan",
            Designation: "Head of Department",
            Department: "Department of Applied Geology",
            Email: "pdiwan.geo@nitrr.ac.in",
            Mobile: "9479221399"
        },
        {
            Name: "Dr. N. Vishwakarma",
            Designation: "Assistant Professor",
            Department: "Department of Applied Geology",
            Email: "nvishwakarma.geo@nitrr.ac.in",
            Mobile: "9425614577"
        },
        {
            Name: "Dr. D. C. Jhariya",
            Designation: "Assistant Professor",
            Department: "Department of Applied Geology",
            Email: "dcjhariya.geo@nitrr.ac.in",
            Mobile: "9754244867"
        },
        {
            Name: "Dr. Himanshu Govil",
            Designation: "Assistant Professor",
            Department: "Department of Applied Geology",
            Email: "hgovil.geo@nitrr.ac.in",
            Mobile: "9927337832"
        },
        {
            Name: "Dr. V. K. Singh",
            Designation: "Temporary Faculty",
            Department: "Department of Applied Geology",
            Email: "vikal_singh@rediffmail.com",
            Mobile: "9425662166"
        },
        {
            Name: "Mr. Gaurav Jangde",
            Designation: "Temporary Faculty",
            Department: "Department of Applied Geology",
            Email: "jgd.aolgarv@gmail.com",
            Mobile: "7225903405"
        },
        {
            Name: "Dr. Bhargava K. Iyengar",
            Designation: "Temporary Faculty",
            Department: "Department of Applied Geology",
            Email: "geoiyengar@gmail.com",
            Mobile: "7509999933"
        }
    ],
    Architecture: [
        {
            Name: "Dr. Swasti Sthapak",
            Designation: "Head & Associate Professor",
            Department: "Architecture Department",
            Email: "hod.arch@nitrr.ac.in",
            Mobile: "09826125014"
        },
        {
            Name: "Dr. Abir Bandyopadhyay",
            Designation: "Professor",
            Department: "Architecture Department",
            Email: "abandyopadhyay.arch@nitrr.ac.in",
            Mobile: "09826131726"
        },
        {
            Name: "Dr. Debashis Sanyal",
            Designation: "Associate Professor",
            Department: "Architecture Department",
            Email: "dsanyal.arch@nitrr.ac.in",
            Mobile: "9826131952"
        },
        {
            Name: "Himanshu Poptani",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "hpoptani.arch@nitrr.ac.in",
            Mobile: "9827111151"
        },
        {
            Name: "Dr. Vandana Agrawal",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "vandanaagrawal28@gmail.com",
            Mobile: "09826413728"
        },
        {
            Name: "Mayank Tenguriya",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "mayanktenguriya@gmail.com",
            Mobile: "9882553520"
        },
        {
            Name: "Shailoneil Sahu",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "ssahu.arch@nitrr.ac.in",
            Mobile: "7748812350"
        },
        {
            Name: "Sachin Kumar Sahu",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "sksahu.arch@nitrr.ac.in",
            Mobile: "9691618055"
        },
        {
            Name: "Vivek Agnihotri",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "ar.vivekagnhiotri@gmail.com",
            Mobile: "9475477527"
        },
        {
            Name: "Syon Pramanik",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "spramanik.arch@nitrr.ac.in",
            Mobile: "8820088999"
        },
        {
            Name: "Kabita Biswas",
            Designation: "Assistant Professor",
            Department: "Architecture Department",
            Email: "kbiswas.arch@nitrr.ac.in",
            Mobile: "7002118210"
        },
        {
            Name: "Dr. Kirti Bhonsle",
            Designation: "Temporary Faculty",
            Department: "Architecture Department",
            Email: "kbnikam.arch@nitrr.ac.in",
            Mobile: "9604939822"
        },
        {
            Name: "Er. Huma Afrin",
            Designation: "Temporary Faculty",
            Department: "Architecture Department",
            Email: "humaafrin@gmail.com",
            Mobile: "8435009495"
        },
        {
            Name: "Mr. Krishna Soni",
            Designation: "Temporary Faculty",
            Department: "Architecture Department",
            Email: "krishnasoni.monkey@gmail.com",
            Mobile: "9009968353"
        },
        {
            Name: "Ms. Devyani Agrawal",
            Designation: "Temporary Faculty",
            Department: "Architecture Department",
            Email: "dagrawal.arch@nitrr.ac.in",
            Mobile: "9893592999"
        },
        {
            Name: "Ms. Saumya Shrivastava",
            Designation: "Temporary Faculty",
            Department: "Architecture Department",
            Email: "sshrivastava.arch@nitrr.ac.in",
            Mobile: "9319058968"
        },
        {
            Name: "Ar. Arun Pandey",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "arunpandey.cg@gmail.com",
            Mobile: "9827142395"
        },
        {
            Name: "Ar. Upendra Singh",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "archiupendra@gmail.com",
            Mobile: "9111601100"
        },
        {
            Name: "Ar. Samrudhi Agrawal",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "samrudhijaipuria@gmail.com",
            Mobile: "9867327007"
        },
        {
            Name: "Mr. Kailaspati Maurya",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "kellymaurya@gmail.com",
            Mobile: "7805920775"
        },
        {
            Name: "Ms. Shraddha Dewangan",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "shraddhadewangan7@gmail.com",
            Mobile: "9977693391"
        },
        {
            Name: "Ar. Piyush Chandrakar",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "ar.piyushchandrakar@yahoo.com",
            Mobile: "7987882933"
        },
        {
            Name: "Ar. Vipin Kr. Yadav",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "waa.raipur@gmail.com",
            Mobile: "9907526123"
        },
        {
            Name: "Ar. Diksha Chandrakar",
            Designation: "Part Time Faculty",
            Department: "Architecture Department",
            Email: "dikshachandrakar94@gmail.com",
            Mobile: "8871295227"
        }
    ],
    Biomedical:[
        {
            Name: "Dr. Lata Sheo Bachan Upadhyay",
            Designation: "Head & Associalte Professor",
            Department: "Biomedical Engineering Department",
            Email: "lupadhyay.bt@nitrr.ac.in",
            Mobile: "09752510082"
        },
        {
            Name: "Dr. Bikesh Kumar Singh",
            Designation: "Assistant Professor",
            Department: "Biomedical Engineering Department",
            Email: "bsingh.bme@nitrr.ac.in",
            Mobile: "9826469522"
        },
        {
            Name: "Dr. Arindam Bit",
            Designation: "Assistant Professor",
            Department: "Biomedical Engineering Department",
            Email: "ab.mbme@gmail.com",
            Mobile: "9433950025"
        },
        {
            Name: "Mrs. Neelamshobha Nirala",
            Designation: "Assistant Professor",
            Department: "Biomedical Engineering Department",
            Email: "neelanir.bme@nitrr.ac.in",
            Mobile: "6232089917"
        },
        {
            Name: "Dr. Saurabh Gupta",
            Designation: "Assistant Professor",
            Department: "Biomedical Engineering Department",
            Email: "sgupta.bme@nitrr.ac.in",
            Mobile: "7389727963"
        },
        {
            Name: "Dr. Nishant Kumar Singh",
            Designation: "Assistant Professor",
            Department: "Biomedical Engineering Department",
            Email: "nksingh.bme@nitrr.ac.in",
            Mobile: "7905733489"
        },
        {
            Name: "Dr. Howa Begam",
            Designation: "Temporary Faculty",
            Department: "Biomedical Engineering Department",
            Email: "howabegam@gmail.com",
            Mobile: "7354445870"
        },
        {
            Name: "Mr. Ashish Kumar Dewangan",
            Designation: "Temporary Faculty",
            Department: "Biomedical Engineering Department",
            Email: "dewangan.ashish@gmail.com",
            Mobile: "9713248837"
        },
        {
            Name: "Mr. Pradeep Singh Thakur",
            Designation: "Temporary Faculty",
            Department: "Biomedical Engineering Department",
            Email: "pradeep.singh4u@gmail.com",
            Mobile: "9329028450"
        },
        {
            Name: "Dr. Sumit Kumar Banchhor",
            Designation: "Temporary Faculty",
            Department: "Biomedical Engineering Department",
            Email: "sumitkbanchhor@gmail.com",
            Mobile: "9893880318"
        },
    ],
    Biotechnology: [
        {
            Name: "Dr. Pratima Gupta",
            Designation: "Head & Associate Professor",
            Department: "Department of Biotechnology",
            Email: "pgupta.bt@nitrr.ac.in",
            Mobile: "9229557174"
        },
        {
            Name: "Dr. Awanish Kumar",
            Designation: "Assistant Professor",
            Department: "Department of Biotechnology",
            Email: "awanik.bt@nitrr.ac.in",
            Mobile: "8871830586"
        },
        {
            Name: "Dr. J. Satya Eswari",
            Designation: "Assistant Professor",
            Department: "Department of Biotechnology",
            Email: "Satyaeswarij.bt@nitrr.ac.in",
            Mobile: "9752135824"
        },
        {
            Name: "Dr. D. Vasanth",
            Designation: "Assistant Professor",
            Department: "Department of Biotechnology",
            Email: "dvasanth.bt@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Ruchi Mishra",
            Designation: "Temporary Faculty",
            Department: "Department of Biotechnology",
            Email: "ruchi.mishra.biotech@gmail.com",
            Mobile: "6394623252"
        },
        {
            Name: "Dr. Sayli Dalal",
            Designation: "Temporary Faculty",
            Department: "Department of Biotechnology",
            Email: "saylidalal@gmail.com",
            Mobile: "7348891027"
        },
        {
            Name: "Dr. Sonam Gupta",
            Designation: "Temporary Faculty",
            Department: "Department of Biotechnology",
            Email: "guptasonam1710@gmailcom",
            Mobile: "9997039114"
        },
        {
            Name: "Mr. Satya Sundar Mohanty",
            Designation: "Temporary Faculty",
            Department: "Department of Biotechnology",
            Email: "satyasundarmohanty88@gmail.com",
            Mobile: "8895528225"
        }
    ],
    Chemical: [
        {
            Name: "Dr. A. K. Poonia",
            Designation: "Head & Associate Professor",
            Department: "Chemical Engineerigng Department",
            Email: "akpoonia.che@nitrr.ac.in",
            Mobile: "9039291989"
        },
        {
            Name: "Dr. A. B. Soni",
            Designation: "Professor",
            Department: "Chemical Engineerigng Department",
            Email: "absoni.chem@nitrr.ac.in",
            Mobile: "9617776363"
        },
        {
            Name: "Dr. Bidyut Mazumdar",
            Designation: "Associate Professor",
            Department: "Chemical Engineerigng Department",
            Email: "bmazumdar.che@nitrr.ac.in",
            Mobile: "9826051120"
        },
        {
            Name: "Dr. P. K. Chaudhari",
            Designation: "Associate Professor",
            Department: "Chemical Engineerigng Department",
            Email: "pkchaudhari.che@nitrr.ac.in",
            Mobile: "9406145088"
        },
        {
            Name: "Dr. V. K. Singh",
            Designation: "Associate Professor",
            Department: "Chemical Engineerigng Department",
            Email: "vksingh.che@nitrr.ac.in",
            Mobile: "8821001865"
        },
        {
            Name: "Dr. Amit Keshav",
            Designation: "Associate Professor",
            Department: "Chemical Engineerigng Department",
            Email: "akeshav.che@nitrr.ac.in",
            Mobile: "7415020281"
        },
        {
            Name: "Dr. Dharm Pal",
            Designation: "Associate Professor",
            Department: "Chemical Engineerigng Department",
            Email: "dpsingh.che@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Prabir Ghosh",
            Designation: "Assistant Professor",
            Department: "Chemical Engineerigng Department",
            Email: "prabirg.che@nitrr.ac.in",
            Mobile: "7773892359"
        },
        {
            Name: "Dr. J. Anand Kumar",
            Designation: "Assistant Professor",
            Department: "Chemical Engineerigng Department",
            Email: "anandj.che@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. R. Manivannan",
            Designation: "Assistant Professor",
            Department: "Chemical Engineerigng Department",
            Email: "rmani.che@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. S. Noyel Victoria",
            Designation: "Assistant Professor",
            Department: "Chemical Engineerigng Department",
            Email: "snvictoria.che@nitrr.ac.in",
            Mobile: "9443381943"
        },
        {
            Name: "Dr. Chandrakant Thakur",
            Designation: "Assistant Professor",
            Department: "Chemical Engineerigng Department",
            Email: "cthakur.che@nitrr.ac.in",
            Mobile: "7354951575"
        },
        {
            Name: "Dr. Vijyendra Kumar",
            Designation: "Temporary Faculty",
            Department: "Chemical Engineerigng Department",
            Email: "vkvijyendra@gmail.com",
            Mobile: "7415020281"
        },
        {
            Name: "Dr. Akhilesh Khapre",
            Designation: "Temporary Faculty",
            Department: "Chemical Engineerigng Department",
            Email: "akhileshkhapre@gmail.com",
            Mobile: "8319813119"
        },
        {
            Name: "Dr. Vandana Gupta",
            Designation: "Temporary Faculty",
            Department: "Chemical Engineerigng Department",
            Email: "guptavandana_chem@yahoo.co.in",
            Mobile: "8602106575"
        }        
    ],
    Civil: [
        {
            Name: "Dr. Gangadhar Ramtekkar",
            Designation: "Head & Professor",
            Department: "Civil Engineerigng Department",
            Email: "gdramtekkar.ce@nitrr.ac.in",
            Mobile: "9893131246"
        },
        {
            Name: "Dr. M. K. Verma",
            Designation: "Professor",
            Department: "Civil Engineerigng Department",
            Email: "mkv.civil@nitrr.ac.in",
            Mobile: "9425203472"
        },
        {
            Name: "Dr. R. K. Tripathi",
            Designation: "Professor",
            Department: "Civil Engineerigng Department",
            Email: "rktripathi.ce@nitrr.ac.in",
            Mobile: "9425508900"
        },
        {
            Name: "Dr. Samir Bajpai",
            Designation: "Professor",
            Department: "Civil Engineerigng Department",
            Email: "sb@nitrr.ac.in",
            Mobile: "0771-2255920"
        },
        {
            Name: "Dr. U. K. Dewangan",
            Designation: "Professor",
            Department: "Civil Engineerigng Department",
            Email: "dewangan.umesh25@gmail.com",
            Mobile: "9406318996"
        },
        {
            Name: "Ajay Vikram Ahirwar",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "avahirwar.ce@nitrr.ac.in",
            Mobile: "9303120369"
        },
        {
            Name: "Dr. Shirish V. Deo",
            Designation: "Associate Professor",
            Department: "Civil Engineerigng Department",
            Email: "svdeo.ce@nitrr.ac.in",
            Mobile: "9713099399"
        },
        {
            Name: "Dr. Laxmikant Yadu",
            Designation: "Associate Professor",
            Department: "Civil Engineerigng Department",
            Email: "lkyadu.ce@nitrr.ac.in",
            Mobile: "9425216529"
        },
        {
            Name: "Dr. Ishtiyaq Ahmad",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "iahmad.ce@nitrr.ac.in",
            Mobile: "8085827071"
        },
        {
            Name: "Dr. Mani Kant Verma",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "manikverma.ce@nitrr.ac.in",
            Mobile: "9907309438"
        },
        {
            Name: "Mohit Jaiswal",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "mjaiswal.ce@nitrr.ac.in",
            Mobile: "9425501906"
        },
        {
            Name: "Dr. Meena Murmu",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "mmurmu.ce@nitrr.ac.in",
            Mobile: "8085857017"
        },
        {
            Name: "Dr. Govardhan Bhat",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "gov.ce@nitrr.ac.in",
            Mobile: "7773835379"
        },
        {
            Name: "Sunny Deol G",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "sdguzzarlapudi.ce@nitrr.ac.in",
            Mobile: "9589103166"
        },
        {
            Name: "Ansu Thomas",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "athomas.ce@nitrr.ac.in",
            Mobile: "7587071024"
        },
        {
            Name: "Dr. Sandeep Kumar Chouksey",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "choukseysandeep@gmail.com",
            Mobile: "9074892077"
        },
        {
            Name: "Dr. A. D. Prasad",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "adprasad.ce@nitrr.ac.in",
            Mobile: "9407937819"
        },
        {
            Name: "Dr. Alfia Bano",
            Designation: "Assistant Professor",
            Department: "Civil Engineerigng Department",
            Email: "alfia.ce@nitrr.ac.in",
            Mobile: "9889914726"
        },
        {
            Name: "Dr. R. P. Hardaha",
            Designation: "Temporary Faculty",
            Department: "Civil Engineerigng Department",
            Email: "rphardaha@gmail.com",
            Mobile: "9009400255"
        },
        {
            Name: "Dr. Sahajpreet Kaur Garewal",
            Designation: "Temporary Faculty",
            Department: "Civil Engineerigng Department",
            Email: "sahaj012@gmail.com",
            Mobile: "7028432410"
        },
        {
            Name: "Suyog S. Ruikar",
            Designation: "Temporary Faculty",
            Department: "Civil Engineerigng Department",
            Email: "suyogruikar11@gmail.com",
            Mobile: "8983270628"
        },
        {
            Name: "Raveena Indwar",
            Designation: "Temporary Faculty",
            Department: "Civil Engineerigng Department",
            Email: "raveena.indwar911@yahoo.in",
            Mobile: "8109749522"
        },
        {
            Name: "Abhishek Singh",
            Designation: "Temporary Faculty",
            Department: "Civil Engineerigng Department",
            Email: "abhisingh260389@gmail.com",
            Mobile: "9424155128"
        },
    ],
    CSE: [
        {
            Name: "Dr. Pradeep Singh",
            Designation: "Head & Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "psingh.cs@nitrr.ac.in",
            Mobile: "9407627366"
        },
        {
            Name: "Dr. Dilip Singh Sisodia",
            Designation: "Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "dssisodia.cs@nitrr.ac.in",
            Mobile: "8462808174"
        },
        {
            Name: "Dr. Naresh Kumar Nagwani",
            Designation: "Associate Professor",
            Department: "Computer Science & Engineering Department",
            Email: "nknagwani.cs@nitrr. ac.in",
            Mobile: "9993312001"
        },
        {
            Name: "Dr. Aakanksha Sharaff",
            Designation: "Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "asharaff.cs@nitrr.ac.in",
            Mobile: "8817813946"
        },
        {
            Name: "Dr. Veena Anand",
            Designation: "Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "vanand.cs@nitrr.ac.in",
            Mobile: "7587071023"
        },
        {
            Name: "Dr. Manu Vardhan",
            Designation: "Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "mvardhan.cs@nitrr.ac.in",
            Mobile: "9770543061"
        },
        {
            Name: "Dr. Preeti Chandrakar",
            Designation: "Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "pchandrakar.cs@nitrr.ac.in",
            Mobile: "7003171408"
        },
        {
            Name: "Dr. K. Jairam Naik",
            Designation: "Assistant Professor",
            Department: "Computer Science & Engineering Department",
            Email: "jnaik.cs@nitrr.ac.in",
            Mobile: "09959971548"
        },
        {
            Name: "Mr. Abhishek Shrivastava",
            Designation: "Temporary Faculty",
            Department: "Computer Science & Engineering Department",
            Email: "abhi2711it@gmail.com",
            Mobile: "9926135652"
        },
        {
            Name: "Ms. Rakhi Seth",
            Designation: "Temporary Faculty",
            Department: "Computer Science & Engineering Department",
            Email: "rakhisethcsit1990@gmail.com",
            Mobile: "9179358436"
        },
        {
            Name: "Mr. Vishal Sathawane",
            Designation: "Temporary Faculty",
            Department: "Computer Science & Engineering Department",
            Email: "vhsathawane@gmail.com",
            Mobile: "7709489118"
        }
    ],
    Electrical: [
        {
            Name: "Dr. N. D. Londhe",
            Designation: "Head & Associate Professor",
            Department: "Electrical Engineering Department",
            Email: "nlondhe.ele@nitrr.ac.in",
            Mobile: "9039898860"
        },
        {
            Name: "Dr. S. Gupta",
            Designation: "Professor",
            Department: "Electrical Engineering Department",
            Email: "sgupta.ele@nitrr.ac.in",
            Mobile: "9993244929"
        },
        {
            Name: "Mr. P. D. Dewangan",
            Designation: "Associate Professor",
            Department: "Electrical Engineering Department",
            Email: "pddewangan.ele@nitrr.ac.in",
            Mobile: "0771-12253439"
        },
        {
            Name: "Dr. A. Yadav",
            Designation: "Associate Professor",
            Department: "Electrical Engineering Department",
            Email: "ayadav.ele@nitrr.ac.in",
            Mobile: "9425852654"
        },
        {
            Name: "Dr. S. Ghosh",
            Designation: "Associate Professor",
            Department: "Electrical Engineering Department",
            Email: "sghosh.ele@nitrr.ac.in",
            Mobile: "8225817389"
        },
        {
            Name: "Dr. R. N Patel",
            Designation: "Associate Professor",
            Department: "Electrical Engineering Department",
            Email: "rnpatel.ee@nitrr.ac.in",
            Mobile: "8770016399"
        },
        {
            Name: "Dr. Sachin Jain",
            Designation: "Associate Professor",
            Department: "Electrical Engineering Department",
            Email: "ID:sjain.ee@nitrr.ac.in",
            Mobile: "9441700975"
        },
        {
            Name: "Dr. Ebha Koley",
            Designation: "Assistant Professor",
            Department: "Electrical Engineering Department",
            Email: "ekoley.ele@nitrr.ac.in",
            Mobile: "9827215396"
        },
        {
            Name: "Dr. S. Patnaik",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "spattnaik.ele@nitrr.ac.in",
            Mobile: "9579383545"
        },
        {
            Name: "Dr. B. Shaw",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "binodshaw2000@gmail.com",
            Mobile: "9832153849"
        },
        {
            Name: "Dr. Varsha Singh",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "vsingh.ele@nitrr.ac.in",
            Mobile: "9425524731"
        },
        {
            Name: "Dr. M. Biswal",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "mbiswal.ele@nitrr.ac.in",
            Mobile: "9437058624"
        },
        {
            Name: "Dr. V. P. Singh",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "vpsingh.ele@nitrr.ac.in",
            Mobile: "8878208323"
        },
        {
            Name: "Dr. Lalit Kumar Sahu",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "lkumar.ele@nitrr.ac.in",
            Mobile: "9752314242"
        },
        {
            Name: "Dr. K. Chandrasekaran",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "kchandrasekaran.ee@nitrr.ac.in",
            Mobile: "9479202269"
        },
        {
            Name: "Dr. B. N. Bag",
            Designation: "Assitant Professor",
            Department: "Electrical Engineering Department",
            Email: "baidyanathmanit@gmail.com",
            Mobile: "8950045927"
        },
        {
            Name: "Mr. Ghanshyam Vishwakarma",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "ghanshyam1562007@gmail.com",
            Mobile: "8871590975"
        },
        {
            Name: "Mr. Avinash Pandey",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "pandey.avinash009@gmail.com",
            Mobile: "8269360607"
        },
        {
            Name: "Mr. Ashutosh Mishra",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "ashutoshmishra1978@gmail.com",
            Mobile: "8889145560"
        },
        {
            Name: "Mr. Karamdeep Singh",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "karamdeep.singh6752@gmail.com",
            Mobile: "9593262591"
        },
        {
            Name: "Mr. Thakura Prasad Meher",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "thakurprasadmeher93@gmail.com",
            Mobile: "9777380263"
        },
        {
            Name: "Dr. Tapan Prakash",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "tapanprakashsinha@gmail.com",
            Mobile: "7415890147"
        },
        {
            Name: "Mrs Rahila Parveen",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "rahila.akhtar@gmail.com",
            Mobile: "9826932344"
        },
        {
            Name: "Mr. Vijaya vardhan Reddy P.",
            Designation: "Temporary Faculty",
            Department: "Electrical Engineering Department",
            Email: "vardhan258@gmail.com",
            Mobile: "9989781411"
        },
    ],
    Elex: [
        {
            Name: "Dr. Guru Prasad Subas Chandra Mishra",
            Designation: "Associate Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "gpscmishra.etc@nitrr.ac.in",
            Mobile: "09437306597"
        },
        {
            Name: "Dr. Shrish Verma",
            Designation: "Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "shrishverma@nitrr.ac.in",
            Mobile: "9826424427"
        },
        {
            Name: "Dr. Ajay Singh Raghuvanshi",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "asraghuvanshi.etc@nitrr.ac.in",
            Mobile: "7587744881"
        },
        {
            Name: "Dr. B. Acharya",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "bacharya.etc@nitrr.ac.in",
            Mobile: "9907445868"
        },
        {
            Name: "Dr. Saikat Majumdar",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "smajumder.etc@nitrr.ac.in",
            Mobile: "9424200516"
        },
        {
            Name: "Sujay Chakraborty",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "schakraborty.etc@nitrr.ac.in",
            Mobile: "7089052241"
        },
        {
            Name: "Dr. T. Meenpal",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "tmeenpal.etc@nitrr.ac.in",
            Mobile: "9575451928"
        },
        {
            Name: "Dr. Suman Kumar Saha",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "sksaha.etc@nitrr.ac.in",
            Mobile: "9407925184"
        },
        {
            Name: "Dr. Anshul Gupta",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "agupta.etc@nitrr.ac.in",
            Mobile: "9589633341"
        },
        {
            Name: "Dr. Alok Naugarhiya",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "anaugarhiya.etc@nitrr.ac.in",
            Mobile: "8989828339"
        },
        {
            Name: "Dr. Ajay Singh",
            Designation: "Assistant Professor",
            Department: "Department of Electronics & Communication Engineering",
            Email: "ajaysingh8226@gmail.com",
            Mobile: "9868792451"
        },
        {
            Name: "Ankush Chunn",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "ankushchunn@gmail.com",
            Mobile: "9530849123,"
        },
        {
            Name: "Dr. Shashi Tiwari",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "tiwarishashi47@gmail.com",
            Mobile: "9340105510"
        },
        {
            Name: "Manan Kumar Tiwari",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "manan.tiwari@gmail.Com",
            Mobile: "9907306226"
        },
        {
            Name: "Dr. Sukeshni Tirkey",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "",
            Mobile: "8103099249"
        },
        {
            Name: "Dr. Prateek Dolas",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "prateekdolas@gmail.com",
            Mobile: "7579086806"
        },
        {
            Name: "Ankit Kumar Singh",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "singhankit491@gmail.com",
            Mobile: "9926633921"
        },
        {
            Name: "Abhishek N. Tripathi",
            Designation: "Temporary Faculty",
            Department: "Department of Electronics & Communication Engineering",
            Email: "abhi.sanutripathi@gmail.com",
            Mobile: "7509457737"
        }
    ],
    IT: [
        {
            Name: "Dr. Satya Prakash Sahu",
            Designation: "Head & Assistant Professor",
            Department: "Department of Information Technology",
            Email: "spsahu.it@nitrr.ac.in",
            Mobile: "9329173783"
        },
        {
            Name: "Dr. Sudhakar Pandey",
            Designation: "Associate Professor",
            Department: "Department of Information Technology",
            Email: "Spandey96@gmail.com",
            Mobile: "9407627136"
        },
        {
            Name: "Dr. Rakesh Tripathi",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "rakeshtripathi21@gmail.com",
            Mobile: "9340105510"
        },
        {
            Name: "Dr. Sanjay Kumar",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "sanjaykumar.anjan@gmail.com",
            Mobile: "9407714701"
        },
        {
            Name: "Dr. Tirath Prasad Sahu",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "tirathpdsahu@gmail.com",
            Mobile: "9826551906"
        },
        {
            Name: "Dr. Mridu Sahu",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "mrisahu.it@nitrr.ac.in",
            Mobile: "9826501139"
        },
        {
            Name: "Dr. Pavan Kumar Mishra",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "technpavan07@gmail.com",
            Mobile: "7566011780"
        },
        {
            Name: "Dr. Rajesh Doriya",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "doriya1@gmail.com",
            Mobile: "7805984189"
        },
        {
            Name: "Dr. Rekh Ram Janghel",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "janghel1310@gmail.com",
            Mobile: "9424126173"
        },
        {
            Name: "Dr. Govind P. Gupta",
            Designation: "Assistant Professor",
            Department: "Department of Information Technology",
            Email: "gpgupta.it@nitrr.ac.in",
            Mobile: "9458127005"
        },
        {
            Name: "Mrs. Sheekha Babar",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "shikha0626@gmail.com",
            Mobile: "9827763506"
        },
        {
            Name: "Ms. Anjali Rajak",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "rajakanjali@gmail.com",
            Mobile: "9407805369"
        },
        {
            Name: "Ms. Sneha Agrawal",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "sneha30193@gmail.com",
            Mobile: "8718090484"
        },
        {
            Name: "Mr. Ashish Misal",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "ashish.mishal153@gmail.com",
            Mobile: "7647073400"
        },
        {
            Name: "Dr. Deepika Agrawal",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "deepika721@gmail.com",
            Mobile: "7389233152"
        },
        {
            Name: "Upendra Chaurasiya",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "upendra.chaurasiya@gmail.com",
            Mobile: "9907221159"
        },
        {
            Name: "Mr. Anil Kumar Pandey",
            Designation: "Temporary Faculty",
            Department: "Department of Information Technology",
            Email: "anilpandey.nit@gmail.com",
            Mobile: "9098410137"
        }
    ],
    Mech: [
        {
            Name: "Dr. R. Salhotra",
            Designation: "Head & Professor",
            Department: "Mechanical Engineering Department",
            Email: "rsalhotra.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. A. M. Rawani",
            Designation: "Professor",
            Department: "Mechanical Engineering Department",
            Email: "amrawani@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. S. Sanyal",
            Designation: "Professor",
            Department: "Mechanical Engineering Department",
            Email: "ssanyal.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. S. L. Sinha",
            Designation: "Professor",
            Department: "Mechanical Engineering Department",
            Email: "slsinha.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. S. D. Patle",
            Designation: "Professor",
            Department: "Mechanical Engineering Department",
            Email: "sdpatle.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. S. P. S. Matharu",
            Designation: "Professor",
            Department: "Mechanical Engineering Department",
            Email: "spsm.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. A. K. Tiwari",
            Designation: "Professor",
            Department: "Mechanical Engineering Department",
            Email: "aktiwari.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. R. K. Yadav",
            Designation: "Associate Professor",
            Department: "Mechanical Engineering Department",
            Email: "rkyadav.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Prof. G. K Sahu",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "gksahu.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. N. Jain",
            Designation: "Associate Professor",
            Department: "Mechanical Engineering Department",
            Email: "nkjain.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. S. Bhowmick",
            Designation: "Associate Professor",
            Department: "Mechanical Engineering Department",
            Email: "sbhowmick.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. N. V. Swamy Naidu",
            Designation: "Associate Professor",
            Department: "Mechanical Engineering Department",
            Email: "swamynaidunv@gmail.com",
            Mobile: ""
        },
        {
            Name: "Dr. Satish Kr. Dewangan",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "skdewangan.amech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Suraj Kumar Mukti",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "skmukti.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Vivek Kr. Gaba",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "vgaba.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Amit Raj Singh",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "arsingh.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Somnath Bhattacharya",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "somnabhatt.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. G. Srinivasu",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "srinisetti.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Harendra Kr. Narang",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "harenar.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Nisha Netam",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "nishane.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Raj Kr. Sahu",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "rksahu.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Mridul Singh Rajput",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "msrajput.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Rajana Suresh Kumar",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "rskumar.me@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Jagadish",
            Designation: "Assistant Professor",
            Department: "Mechanical Engineering Department",
            Email: "jagadishbaridabad.s@gmail.com",
            Mobile: ""
        },
        {
            Name: "Dr. Devendra Kumar Dewangan",
            Designation: "Temporary Faculty",
            Department: "Mechanical Engineering Department",
            Email: "deva.iitr@gmail.com",
            Mobile: ""
        },
        {
            Name: "Dr. Ajit Kumar Singh",
            Designation: "Temporary Faculty",
            Department: "Mechanical Engineering Department",
            Email: "aksingh.mech@nitrr.ac.in",
            Mobile: ""
        },{
            Name: "Dr. Ankur Gupta",
            Designation: "Temporary Faculty",
            Department: "Mechanical Engineering Department",
            Email: "agupta.mech@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Vaneshwar Kumar Sahu",
            Designation: "Temporary Faculty",
            Department: "Mechanical Engineering Department",
            Email: "vksahu.mech@nitrr.ac.in",
            Mobile: ""
        },{
            Name: "Mr. Yagya Kumar Sahu",
            Designation: "Temporary Faculty",
            Department: "Mechanical Engineering Department",
            Email: "yksahu.mech@nitrr.ac.in",
            Mobile: ""
        }
    ],
    Meta: [
        {
            Name: "Dr. Manoranjan Kumar Manoj",
            Designation: "Head & Assistant Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "mkmanoj.met@nitrr.ac.in",
            Mobile: "9303407651"
        },
        {
            Name: "Dr. Manoj Kumar Chopkar",
            Designation: "Associate Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "manoj.chopkar@gmail.com",
            Mobile: "8109939981"
        },
        {
            Name: "Dr. Manwendra K. Tripathi",
            Designation: "Assistant Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "mktripathi.met@nitrr.ac.in",
            Mobile: "8103766514"
        },
        {
            Name: "Dr. Subhas Ganguly",
            Designation: "Assistant Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "sganguly.met@nitrr.ac.in",
            Mobile: "9340437917"
        },
        {
            Name: "Dr. Sudip Kumar Sinha",
            Designation: "Assistant Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "sksinha.mme@nitrr.ac.in",
            Mobile: "9340437917"
        },
        {
            Name: "Dr. Sanjeev Das",
            Designation: "Assistant Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "sdas.met@nitrr.ac.in",
            Mobile: "9436735328"
        },
        {
            Name: "Dr. Neha Gupta",
            Designation: "Assistant Professor",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "ngupta.met@nitrr.ac.in",
            Mobile: "7389037915"
        },
        {
            Name: "Mr. Gaurav Shukla",
            Designation: "Temporary Faculty",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "ggauravshukla@gmail.com",
            Mobile: "8793373384"
        },
        {
            Name: "Mr. Vineeth Menon",
            Designation: "Temporary Faculty",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "vineeth7592@gmail.com",
            Mobile: "7587756040"
        },
        {
            Name: "Mr. Pranav Kumar",
            Designation: "Temporary Faculty",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "erpkrajput991@gmail.com",
            Mobile: "8436036039"
        },
        {
            Name: "Arunabh Meshram",
            Designation: "Temporary Faculty",
            Department: "Metallurgical and Materials Engineering Department",
            Email: "arunabhmeshram@gmail.com",
            Mobile: "8109289218"
        }
    ],
    Mining: [
        {
            Name: "Dr. Ravi K. Jade",
            Designation: "Head & Associate Professor",
            Department: "Mining Engineering Department",
            Email: "ravikjade@gmail.com",
            Mobile: "7869481022"
        },
        {
            Name: "Dr. Manoj Pradhan",
            Designation: "Professor",
            Department: "Mining Engineering Department",
            Email: "pradhan_nitrr@yahoo.com",
            Mobile: "9826540711"
        },
        {
            Name: "Prof. B. R. Parate",
            Designation: "Associate Professor",
            Department: "Mining Engineering Department",
            Email: "brparate@yahoo.co.in",
            Mobile: "9329768877"
        },
        {
            Name: "Dr. P. Y. Dhekne",
            Designation: "Associate Professor",
            Department: "Mining Engineering Department",
            Email: "pdhekne@nitrr.ac.in",
            Mobile: "9669400678"
        },
        {
            Name: "Dr. M. D. Patel",
            Designation: "Associate Professor",
            Department: "Mining Engineering Department",
            Email: "mdpatel@mail.com",
            Mobile: "9179359352"
        },
        {
            Name: "Dr. Pankaj Dewangan",
            Designation: "Associate Professor",
            Department: "Mining Engineering Department",
            Email: "pankajnitrr@yahoo.co.in",
            Mobile: "982665155"
        },
        {
            Name: "Dr. A. K. Dash",
            Designation: "Assistant Professor",
            Department: "Mining Engineering Department",
            Email: "akdash.min@nitrr.ac.in",
            Mobile: "9406148487"
        },
        {
            Name: "Dr. Vineeth Balakrishnan",
            Designation: "Temporary Faculty",
            Department: "Mining Engineering Department",
            Email: "discovervineeth@gmail.com",
            Mobile: "8823068228"
        },
        {
            Name: "Mr. K. L. Janghel",
            Designation: "Teaching Assitant",
            Department: "Mining Engineering Department",
            Email: "khemjanghel@gmail.com",
            Mobile: "8839782643"
        },
        {
            Name: "Mr. Ajay Agrawal",
            Designation: "Teaching Assitant",
            Department: "Mining Engineering Department",
            Email: "a.ajay7992@gmail.com",
            Mobile: "9340668207"
        },
        {
            Name: "Mr. Santosh Choudhary",
            Designation: "Teaching Assitant",
            Department: "Mining Engineering Department",
            Email: "schoudhary674@gmail.com",
            Mobile: "9039771048"
        }
    ],
    Chem: [
        {
            Name: "Dr. Kavita Tapadia",
            Designation: "Head & Associate Professor",
            Department: "Department of Chemistry",
            Email: "ktapadia.chy@nitrr.ac.in",
            Mobile: "9977987702"
        },
        {
            Name: "Dr. Fahmida Khan",
            Designation: "Professor",
            Department: "Department of Chemistry",
            Email: "fkhan.chy@nitrr.ac.in",
            Mobile: "9893363348"
        },
        {
            Name: "Dr. Shyama Prasad Mahapatra",
            Designation: "Associate Professor",
            Department: "Department of Chemistry",
            Email: "spmahapatra.chy@nitrr.ac.in",
            Mobile: "9098411198"
        },
        {
            Name: "Dr. Tungabidya Maharana",
            Designation: "Assistant Professor",
            Department: "Department of Chemistry",
            Email: "mtungabidya@gmail.com",
            Mobile: "8602242713"
        },
        {
            Name: "Dr. Santhosh Penta",
            Designation: "Assistant Professor",
            Department: "Department of Chemistry",
            Email: "spenta.che@nitrr.ac.in",
            Mobile: "8305654728"
        },
        {
            Name: "Dr. Kafeel Ahmad Siddiqui",
            Designation: "Assitant Professor",
            Department: "Department of Chemistry",
            Email: "kafeela@gmail.com",
            Mobile: "7024651313"
        },
        {
            Name: "Dr. Sonalika Agrawal",
            Designation: "Temporary Faculty",
            Department: "Department of Chemistry",
            Email: "sagrawal.chy@nitrr.ac.in",
            Mobile: "9827198190"
        },
        {
            Name: "Dr. Santosh Bahadur Singh",
            Designation: "Temporary Faculty",
            Department: "Department of Chemistry",
            Email: "singhsbau2012@gmail.com",
            Mobile: "9453493698"
        },
        {
            Name: "Dr. Subrat Kumar Pattanayak",
            Designation: "Temporary Faculty",
            Department: "Department of Chemistry",
            Email: "skpiitbbs@gmail.com",
            Mobile: "7587745831"
        },
        {
            Name: "Dr. Nariman Khan",
            Designation: "Temporary Faculty",
            Department: "Department of Chemistry",
            Email: "nariman.firdaus@gmail.com",
            Mobile: "9300644887"
        },
        {
            Name: "Dr. Jully Patel",
            Designation: "Temporary Faculty",
            Department: "Department of Chemistry",
            Email: "jully.p.n@gmail.com",
            Mobile: "8114335344"
        }
    ],
    Maths: [
        {
            Name: "Dr. Arvind Kumar Sinha",
            Designation: "Head & Associate Professor",
            Department: "Department of Mathematics",
            Email: "aksinha.maths@nitrr.ac.in",
            Mobile: "9300685809"
        },
        {
            Name: "Dr. R. P. Pathak",
            Designation: "Visiting Faculty",
            Department: "Department of Mathematics",
            Email: "rppathak.maths@nitrr.ac.in",
            Mobile: "9406122233"
        },
        {
            Name: "Dr. Debasisha Mishra",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "dmishra@nitrr.ac.in",
            Mobile: "9329691324"
        },
        {
            Name: "Dr Sujit Kumar Samanta",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "sksamanta.maths@nitrr.ac.in",
            Mobile: "9575509285"
        },
        {
            Name: "Dr. Sharada Nandan Raw",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "sharaw.maths@nitrr.ac.in",
            Mobile: "9575508440"
        },
        {
            Name: "Dr. Madasu Krishna Prasad",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "madaspra.maths@nitrr.ac.in",
            Mobile: "9575508447"
        },
        {
            Name: "Dr. Nilesh Kumar Thakur",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "nkthakur.maths@nitrr.ac.in",
            Mobile: "9934923667"
        },
        {
            Name: "Dr. Deepmala Sharma",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "deepsha.maths@nitrr.ac.in",
            Mobile: "7489465263"
        },
        {
            Name: "Dr. Anup Kumar Sharma",
            Designation: "Assistant Professor",
            Department: "Department of Mathematics",
            Email: "aksharma.maths@nitrr.ac.in",
            Mobile: "9199454963"
        },
        {
            Name: "Ms. Ambika Sahu",
            Designation: "Teaching Assistant",
            Department: "Department of Mathematics",
            Email: "ambika11sahu@gmail.com",
            Mobile: "9098141269"
        },
        {
            Name: "Mr. Pradip R. Patle",
            Designation: "Teaching Assistant",
            Department: "Department of Mathematics",
            Email: "pradip.patle12@gmail.com",
            Mobile: "80007796212"
        },
        {
            Name: "Ms. Pooja Gupta",
            Designation: "Teaching Assistant",
            Department: "Department of Mathematics",
            Email: "poojagupta2327@gmail.com",
            Mobile: "7999317467"
        },
        {
            Name: "Mr. Sunil Kushavaha",
            Designation: "Teaching Assistant",
            Department: "Department of Mathematics",
            Email: "kushavaha.sunil@gmail.com",
            Mobile: "9321692736"
        },
    ],
    Phy: [
        {
            Name: "Dr. Ayush Khare",
            Designation: "Head & Associate Professor",
            Department: "Department of Physics",
            Email: "",
            Mobile: "9425213445"
        },
        {
            Name: "Dr. Sadhana Agrawal",
            Designation: "Professor",
            Department: "Department of Physics",
            Email: "",
            Mobile: "9993885860"
        },
        {
            Name: "Dr. Ashok Kumar Shrivastav",
            Designation: "Professor",
            Department: "Department of Physics",
            Email: "",
            Mobile: "9827159605"
        },
        {
            Name: "Dr. Bijay Kumar Sahoo",
            Designation: "Associate Professor",
            Department: "Department of Physics",
            Email: "",
            Mobile: "9589186713"
        },
        {
            Name: "Dr. Sapan Mohan Saini",
            Designation: "Associate Professor",
            Department: "Department of Physics",
            Email: "",
            Mobile: "9179193464"
        },
        {
            Name: "Dr. Sanjay Kumar Sahu",
            Designation: "Temporary Faculty",
            Department: "Department of Physics",
            Email: "sanjayphy@gmail.com",
            Mobile: "9884682544"
        },
        {
            Name: "Dr. K. S. Ojha",
            Designation: "Temporary Faculty",
            Department: "Department of Physics",
            Email: "kanhaiyaisojha@gmail.com",
            Mobile: "8962378087"
        },
        {
            Name: "Dr. Anju Pansari",
            Designation: "Temporary Faculty",
            Department: "Department of Physics",
            Email: "anjupansari20@gmail.com",
            Mobile: "9754324240"
        },
        {
            Name: "Dr. Sudha Kumari",
            Designation: "Temporary Faculty",
            Department: "Department of Physics",
            Email: "kumari.sudha93@gmail.com",
            Mobile: "8051141303"
        },
        {
            Name: "Dr. Sheetal Soni",
            Designation: "Temporary Faculty",
            Department: "Department of Physics",
            Email: "ssoni2312@gmail.com",
            Mobile: "9340610171"
        },
        {
            Name: "Dr. Abhishek Johri",
            Designation: "Temporary Faculty",
            Department: "Department of Physics",
            Email: "johri.exp@gmail.com",
            Mobile: "7875644249"
        }
    ],
    HSS: [
        {
            Name: "Dr. U. K. Dewangan",
            Designation: "Head & Professor",
            Department: "Department of Humanities & Social Science",
            Email: "hod.hum@nitrr.ac.in",
            Mobile: ""
        },
        {
            Name: "Dr. Jaya Dwivedi",
            Designation: "Associate Professor",
            Department: "Department of Humanities & Social Science",
            Email: "jdwivedi.eng@nitrr.ac.in",
            Mobile: "9425069005"
        },
        {
            Name: "Dr. Anoop Tiwari",
            Designation: "Assistant Professor",
            Department: "Department of Humanities & Social Science",
            Email: "dr.akt87@gmail.com",
            Mobile: "94246-68749"
        },
        {
            Name: "Dr. Shashikanta Tarai",
            Designation: "Assistant Professor",
            Department: "Department of Humanities & Social Science",
            Email: "starai.iitm@gmail.com",
            Mobile: "9893415408"
        },
        {
            Name: "Dr. Sandip Sarkar",
            Designation: "Assistant Professor",
            Department: "Department of Humanities & Social Science",
            Email: "sandipsarkar7@gmail.com",
            Mobile: "9926583779"
        },
        {
            Name: "Dr. Moksha Singh",
            Designation: "Assistant Professor",
            Department: "Department of Humanities & Social Science",
            Email: "mokshassingh@gmail.com",
            Mobile: "9977958789"
        },
        {
            Name: "Dr. Y. Vijaya Babu",
            Designation: "Assistant Professor",
            Department: "Department of Humanities & Social Science",
            Email: "vijay1yesh@yahoo.co.in",
            Mobile: "9441463659"
        },
        {
            Name: "Dr. Hina Chawda",
            Designation: "Temporary Faculty",
            Department: "Department of Humanities & Social Science",
            Email: "counsellingcell.nitrr@gmail.com",
            Mobile: "8839616181"
        },
        {
            Name: "Dr. Manju Shukla",
            Designation: "Temporary Faculty",
            Department: "Department of Humanities & Social Science",
            Email: "manjushukla65@yahoo.com",
            Mobile: "7587068170"
        },
        {
            Name: "Mr. Suraj Nishad",
            Designation: "Teaching Assistant",
            Department: "Department of Humanities & Social Science",
            Email: "surajn131@gmail.com",
            Mobile: "9713214096"
        },
        {
            Name: "Mr. Ritambhara Chandrakar",
            Designation: "Part Time Faculty",
            Department: "Department of Humanities & Social Science",
            Email: "ritambhara.chandrakar@gmail.com",
            Mobile: "7747002018"
        },
        {
            Name: "Mr. Lomash Chandrakar",
            Designation: "Part Time Faculty",
            Department: "Department of Humanities & Social Science",
            Email: "lomash.99@gmail.com",
            Mobile: "9977724255"
        }
    ],
    Developer: [
        {
            Name: "Aman Bhaskar",
            Designation: "",
            Department: "",
            Email: "amanbh2@gmail.com",
            Mobile: "7903475672"
        }
    ]
}

const listbox = document.getElementById("listbox");
const filtercontacts = document.getElementById("filter-contacts");
const searchbox = document.getElementById("searchInput");
const searchbtn = document.getElementById("searchbtn");

filtercontacts.addEventListener('click', filtercontactfn);
searchbtn.addEventListener('click', searchcontactfn);


function displayContacts(faculty){
    const contactlistDiv = document.createElement('div');
	contactlistDiv.classList.add("liststyle");
    contactlistDiv.innerHTML = `<h6>${faculty.Name}</h6>
    <p>${faculty.Designation}</p>
    <p>${faculty.Department}</p>
    <p>${faculty.Email}</p>
    <p>${faculty.Mobile}</p>`;

    listbox.appendChild(contactlistDiv);    
}
function looptoshow(dep){
    for(var i=0;i<dep.length;i++){
        displayContacts(dep[i])
    }
}
function filtercontactfn(e){
    switch (e.target.value){
        case "All":
            removecontactlist();
            depall=[contacts.Administration,contacts.AppliedGeology,contacts.Architecture,contacts.Biomedical,contacts.Biotechnology,contacts.Chemical,contacts.Civil,contacts.CSE,contacts.Electrical,contacts.Elex,contacts.IT,contacts.Mech,contacts.Meta,contacts.Mining,contacts.Chem,contacts.Maths,contacts.Phy,contacts.HSS,contacts.Developer]
            for(var i=0;i<depall.length;i++){
                looptoshow(depall[i]);
            }                        
        break;
        case "Administration":
            removecontactlist();
            dep=contacts.Administration;
            looptoshow(dep);            
        break;
        case "AppliedGeology":
            removecontactlist();
            dep=contacts.AppliedGeology;
            looptoshow(dep);     
        break;
        case "Architecture":
            removecontactlist();
            dep=contacts.Architecture;
            looptoshow(dep);            
        break;
        case "Biomedical":
            removecontactlist();
            dep=contacts.Biomedical;
            looptoshow(dep);            
        break;
        case "Biotechnology":
            removecontactlist();
            dep=contacts.Biotechnology;
            looptoshow(dep);            
        break;
        case "Chemical":
            removecontactlist();
            dep=contacts.Chemical;
            looptoshow(dep);
        break;
        case "Civil":
            removecontactlist();
            dep=contacts.Civil;
            looptoshow(dep);
        break;
        case "CSE":
            removecontactlist();
            dep=contacts.CSE;
            looptoshow(dep);
        break;
        case "Electrical":
            removecontactlist();
            dep=contacts.Electrical;
            looptoshow(dep);
        break;
        case "Elex":
            removecontactlist();
            dep=contacts.Elex;
            looptoshow(dep);
        break;
        case "IT":
            removecontactlist();
            dep=contacts.IT;
            looptoshow(dep);
        break;
        case "Mech":
            removecontactlist();
            dep=contacts.Mech;
            looptoshow(dep);
        break;
        case "Meta":
            removecontactlist();
            dep=contacts.Meta;
            looptoshow(dep);
        break;
        case "Mining":
            removecontactlist();
            dep=contacts.Mining;
            looptoshow(dep);
        break;
        case "Chem":
            removecontactlist();
            dep=contacts.Chem;
            looptoshow(dep);
        break;
        case "Maths":
            removecontactlist();
            dep=contacts.Maths;
            looptoshow(dep);
        break;
        case "Phy":
            removecontactlist();
            dep=contacts.Phy;
            looptoshow(dep);
        break;
        case "HSS":
            removecontactlist();
            dep=contacts.HSS;
            looptoshow(dep);
        break;
        case "Developer":
            removecontactlist();
            dep=contacts.Developer;
            looptoshow(dep);
        break;
    }
}
function removecontactlist(){
    t=listbox.childElementCount;
    for(var i=0;i<t;i++){
        listbox.removeChild(listbox.children[0]);
    }
}
function getsearchitem(){
    return searchbox.value
}
function looptodisplay(dep,query){
    for(var i=0;i<dep.length;i++){
        contactname=dep[i].Name.toLowerCase();
        n=contactname.search(query);
        if(n>=0){
            displayContacts(dep[i]);
        }
    }
}
function searchcontactfn(e){
    e.preventDefault();
    query=getsearchitem().toLowerCase();
    switch (filtercontacts.value){
        case "All":
            removecontactlist();
            depall=[contacts.Administration,contacts.AppliedGeology,contacts.Architecture,contacts.Biomedical,contacts.Biotechnology,contacts.Chemical,contacts.Civil,contacts.CSE,contacts.Electrical,contacts.Elex,contacts.IT,contacts.Mech,contacts.Meta,contacts.Mining,contacts.Chem,contacts.Maths,contacts.Phy,contacts.HSS,contacts.Developer]
            for(var i=0;i<depall.length;i++){
                looptodisplay(depall[i],query);
            }
        break;
        case "Administration":
            removecontactlist();
            dep=contacts.Administration;
            looptodisplay(dep,query);            
        break;
        case "AppliedGeology":
            removecontactlist();
            dep=contacts.AppliedGeology;
            looptodisplay(dep,query);      
        break;
        case "Architecture":
            removecontactlist();
            dep=contacts.Architecture;
            looptodisplay(dep,query);
        break;
        case "Biomedical":
            removecontactlist();
            dep=contacts.Biomedical;
            looptodisplay(dep,query);      
        break;
        case "Biotechnology":
            removecontactlist();
            dep=contacts.Biotechnology;
            looptodisplay(dep,query);
        break;
        case "Chemical":
            removecontactlist();
            dep=contacts.Chemical;
            looptodisplay(dep,query);
        break;
        case "Civil":
            removecontactlist();
            dep=contacts.Civil;
            looptodisplay(dep,query);
        break;
        case "CSE":
            removecontactlist();
            dep=contacts.CSE;
            looptodisplay(dep,query);
        break;
        case "Electrical":
            removecontactlist();
            dep=contacts.Electrical;
            looptodisplay(dep,query);
        break;
        case "Elex":
            removecontactlist();
            dep=contacts.Elex;
            looptodisplay(dep,query);
        break;
        case "IT":
            removecontactlist();
            dep=contacts.IT;
            looptodisplay(dep,query);
        break;
        case "Mech":
            removecontactlist();
            dep=contacts.Mech;
            looptodisplay(dep,query);
        break;
        case "Meta":
            removecontactlist();
            dep=contacts.Meta;
            looptodisplay(dep,query);
        break;
        case "Mining":
            removecontactlist();
            dep=contacts.Mining;
            looptodisplay(dep,query);
        break;
        case "Chem":
            removecontactlist();
            dep=contacts.Chem;
            looptodisplay(dep,query);
        break;
        case "Maths":
            removecontactlist();
            dep=contacts.Maths;
            looptodisplay(dep,query);
        break;
        case "Phy":
            removecontactlist();
            dep=contacts.Phy;
            looptodisplay(dep,query);
        break;
        case "HSS":
            removecontactlist();
            dep=contacts.HSS;
            looptodisplay(dep,query);
        break;
        case "Developer":
            removecontactlist();
            dep=contacts.Developer;
            looptodisplay(dep,query);
        break;
    }
}
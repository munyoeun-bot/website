// =======================
// LANGUAGE SYSTEM (FIXED)
// =======================
let lang = localStorage.getItem("lang") || "kh";

const text = {
  kh: {
    //nav bar
    title: "សាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ",
    title2: "វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍",
    home: "ទំព័រដើម",
    nvCS: "វិទ្យាសាស្រ្តកុំព្យូទ័រ",
    navskills: "ជំនាញ",
    navinformation: "ព័ត៍មាន",
    contact: "ទំនាក់ទំនង",
    skill: "ជំនាញទាំង៥",
    atvi: "សកម្មភាពសិក្សា និង អនុវត្ត",
    nav: "បំណិនជីវិត",
    navhistor: "ប្រវត្តិសាលា",
    navTC: "គ្រូបង្រៀន",
    naveven: "កម្មវិធីនានា",
    navacti: "សកម្មភាពម៉ោងអនុវត្ត",
    navLB: "បណ្ណាល័យទំនើប",
    navEC: "អេឡិចត្រូនិច",
    navAC: "គណនេយ្យ",
    navAH: "ផលិតកម្មសត្វ",
    navacro: "ក្សេត្រសាស្រ្ត",
    //index page
    indexSL1: "សូមស្វាគមន៍",
    indexSL1p: "ICD វិទ្យាស្ថានអភិវឌ្ឃន៍សហគមន៍",
    indexSL2: "លោក កុយ ជំនិត",
    indexSL2p: "នាយកវិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍",
    indexSL3: "ទិវាជាតិអំណាន",
    indexSL3p: "ទិវាជាតិអំណាន ក្រោមប្រធានបទ «សំណេរ និង អំណានក្នុងបរិបទថ្",
    indexSL4: "ពិព័រណ៍ស្នាដៃសិស្សអប់រំបច្ចេកទេស",
    indexSL4: "ពិព័រណ៍ស្នាដៃសិស្សអប់រំបច្ចេកទេស និង កម្មពីធីជំនួបអាណាព្យាបាលរបស់សិស្ស",
    indexSL5: "បណ្ណាល័យទំនើប",
    indexSL5p: "បណ្ណាល័យទំនើប​ ដែលផ្តល់ជូននូវឯកសារច្បាស់លាស់ និង សៀវភៅជាច្រើន",
    indexSL6: "បន្ទប់អនុវត្តទំនើប",
    indexSL6p: "បន្ទប់អនុវត្តទំនើប ដែលផ្ដល់ការងាយស្រួលដល់សិស្សសិក្សាអនុវត្ត",
    indextitle1: "ការអប់រំគុណភាព",
    indexc1: "កម្មវិធីនានា",
    indexc1p: "កម្មវិធីដែលប្រារព្វនៅក្នុងសាលាដើម្បីអោយការសិក្សាមានគុណភាព និងកម្មវិធីផ្សេងៗដែរសាលាប្រារពឡើង",
    indexc2: "គ្រូបង្រៀនជំនាញ",
    indexc2p: "បង្រៀនដោយសាស្រ្តចារ្យ និងអ្នកឯកទេស ទៅតាមផ្នែកនិងជំនាញនីមួយៗ ដែលមានបទពិសៅធន៍ច្រើនឆ្នាំ",
    indexc3: "បណ្ណាល័យទំនើប",
    indexc3p: "សកម្មភាពនៅក្នុងបណ្ណាល័យដែរសិស្សកំពុងតែ ស្រាវជ្រាវនិងអានឯកសារផ្សេងៗ",
    indexca1: "វិទ្យាសាស្រ្តកុំព្យូទ័រ",
    indexca1p: "គឺជាជំនាញដែលស្រាវជ្រាវនិងអភិវឌ្ឍន៍កម្មវិធីនានា សិក្សាទៅលើបច្ចេកវិទ្យាថ្មី",
    indexca2: "ក្សេត្រសាស្",
    indexca2p: "ជំនាញដែលស្រាវជ្រាវនិងអភិវឌ្ឍន៍ការដាំដុះ និងសេដ្ឋកិច្ច​ agronomy",
    indexca3: "អេឡិចត្រូនិច",
    indexca3p: "ជំនាញដែលស្រាវជ្រាវនិងអភិវឌ្ឍន៍ការប្រើប្រាស់អេឡិចត្រូនិច និងបច្ចេកវិទ្",
    indexca4: "គណនេយ្យ",
    indexca4p: "គឺជាជំនាញដែលស្រាវជ្រាវនិងអភិវឌ្ឍន៍កម្មវិធីគណនេយ្យ ផ្នែកហេរញ្ញវត្ថុផ្សេងៗ",
    indexca5: "បសុវប្បកម្ម​",
    indexca5p: "ជំនាញដែលស្រាវជ្រាវនិងអភិវឌ្ឍន៍ការថែទាំ សត្វនិងព្យាបាល ជាដើម",
    indextitle3: "ព័ត៌មានថ្មីៗ",
    indexe1: "កម្មពិធីនានា",
    indexe1p: "សូមជម្រាប់សិស្សទាំងអស់ ថាវិទ្យាស្ថាននិងបើកវគ្គសិក្សាថ្មីចាប់ផ្តើមនៅថ្ងៃនេះ",
    indexe2: "សកម្មភាពនៅម៉ោងអនុវត",
    indexe2p: "សកម្មភាពនៅក្នុងម៉ោងអនុវត្តដែរសិស្សកំពុងតែ ស្រាវជ្រាវនិងរុករកឯកសារផ្សេងៗ",
    indexe3: "បំណិនជីវិត",
    indexe3p: "ជារាងរាល់ថ្ងៃចន្ទសិស្សនៅក្នុងវិទ្យាស្ថានទាំងអស់ នៅម៉ោង៤ទៅម៉ោង៥រសៀលត្រូវចូមម៉ោងអប់រំចិត្ត",
    indextitle4: "កម្មពិធីនានា",
    indexev1: "ទិវាជាតិអំណានលើកទី១១ ",
    indexev1p: "ទិវាជាតិអំណាន ក្រោមប្រធានបទ « ​សំណេរ និងអំណានក្នុងបរិបទថ្មី »",
    indexev2: "កម្មវិធីជួបជុំអាណាព្យាបាលសិស្ស",
    indexev2p: "ពិធីបើកអាហារូបករណ៍ជូនដល់សិស្សានុសិស្សថ្នាក់អប់រំបច្ចេកទេស​ សរុបចំនួន ១៥១ នាក់",
    indexev3: "សង្ក្រាន្ត​ ជា​ ស៊ីម​ កំចាយ​មារ",
    indexev3p: "នៅសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ​ ស្រុកកំចាយមារ​ ខេត្តព្រៃវែងក្នុងឱកាស​ប្រារព្ធកម្មវិធី​បុណ្យ​ចូល​ឆ្នាំ​ថ្មីប្រពៃណីជាតិខ្មែr",
    //footer
    fttitle: "ផ្តល់ការអប់រំគុណភាព និងបច្ចេកវិទ្យាទំនើប",
    fttitlemain: "វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍",
    fthome: "ទំព័រដើម",
    ftab: "ប្រវត្តិសាលា",
    ftan: "សេចក្ដីប្រកាស",
    ftct: "ទំនាក់ទំនង",
    //life skill
    lfstitle: "បំណិនជីវិត",
    lfstitlep: "យើងផ្តល់ការអប់រំគុណភាពខ្ពស់ ទាំងចំណេះដឹង និងបំណិន ដើម្បីអភិវឌ្ឍសិស្សឲ្យមានចំណេះ និងជំនាញសម្រាប់អនាគត។",
    lfstitle1: "សកម្មភាពម៉ោងអប់រំចិត្ត",
    lfsc1: "ម៉ោងអប់រំចិត្ត",
    lfsc1p: "ថ្ងៃចន្ទ ៦រោច ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី៩ ខែមីនា ឆ្នាំ២០២៦កម្មវីធីអប់រំចិត្ត សម្តែងដោយព្រះគ្រូ ព្រះចៅអធិការ(ហៅវត្តជោរ៍)",    
    lfsc2: "ម៉ោងអប់រំចិត្ត",
    lfsc2p: "#កម្មវីធី​អប់រំ​ចិត្ត​ ថ្ងៃចន្ទ ៧កើត ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស. ២៥៦៩ កំចាយមារ, ត្រូវនឹងថ្ងៃទី២៣ ខែកុម្ភៈ ឆ្នាំ២០២៦",
    lfsc3p: "ថ្ងៃចន្ទ ៦រោច ខែជេស្ឋ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី១៦ ខែមិថុនា ឆ្នាំ២០២៥ #វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ បានដឹកនាំសិស្សអនុវត្តម៉ោងអប់រំចិត្ត",
    lfsc4p:"ថ្ងៃចន្ទ ៦រោច ខែជេស្ឋ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី១៦ ខែមិថុនា ឆ្នាំ២០២៥ #វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ បានដឹកនាំសិស្សអនុវត្តម៉ោងអប់រំចិត្ត",
    lfsc5p:"ថ្ងៃចន្ទ ១៤កើត ខែជេស្ឋ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី៩ ខែមិថុនា ឆ្នាំ២០២៥ #វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ បានរៀបចំកម្មវិធីអប់រំចិត្តដល់សិស្សានុសិស្សដែលរៀនថ្នាក់អប់រំបច្ចេកទេស ៩+១, ៩+២, និង ៩+៣ ដែលសម្តែងធម៌ទេសនាដោយព្រះគ្រូចៅអធិការ វត្តជោត្តនារាម ហៅវត្តជោរ៍។",
    lfsc6p: "នៅរសៀលថ្ងៃចន្ទ ២កើត ខែមិគសិរ ឆ្នាំរោង ឆស័ក ពុទ្ធសករាជ ២៥៦៨ ត្រូវនឹងថ្ងៃទី២ ខែធ្នូ ឆ្នាំ២០២៤#វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ នៃសាកលវិទ្យាល័យជាតិជាសុីមកំចាយមារ បានរៀបចំកម្មវិធី: #អប់រំចិត្ត  ដល់សិស្សានុសិស្ស អប់រំបច្ចេកទេស ដែលកំពុងសិក្សានៅវិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ នាឆ្នាំសិក្សាថ្មី (២០២៤-២០២៥)។",
    lfsctitle3: "សកម្មភាពសម្អាតបរិស្ថាន",
    lfsca1: "បរិស្ថាន",
    lfsca1p:"ទិវា​បរិ​ស្ថាន​ជាតិ និង​បរិ​ស្ថាន​ពិភព​លោក",
    lfsca1pp:"ថ្ងៃព្រហស្បតិ៍ ១០កើត ខែជេស្ឋ ឆ្នាំម្សាញ់ សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី៥ ខែមិថុនា ឆ្នាំ២០២៥#វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារបានប្រារព្ធ ទិវា​បរិ​ស្ថាន​ជាតិ និង​បរិ​ស្ថាន​ពិភព​លោក ខួបលើកទី២៩ (National and World Environment Day) និងយុទ្ធនាការសម្អាតបរិស្ថាននៅបរិវេណសាកលវិទ្យាល័យ និងតាមបណ្តោយផ្លូវជាតិអមសងខាងផ្លូវជាតិលេខ៨។",
    lfsca2:"បរិស្ថាន",
    lfsca2p:"សិស្សានុសិស្សវិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ចូលរួមសម្អាតបរិស្ថាន",
    lfsca2pp:"#សកម្មភាពសិស្សានុសិស្សវិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ចូលរួមសម្អាតបរិស្ថាន និងថង់ប្លាស្ទិក នៅបរិវេណសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ ២១/មេសា/២០២៥",
    lfsca3:"បរិស្ថាន",
    lfsca3p:"ចូលរួមសម្អាតបរិស្ថានក្នុងទីធ្លារសាលា",
    lfsca3pp:"សកម្មភាពសិស្សវិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ ចូលរួមសម្អាតបរិស្ថានក្នុងទីធ្លារសាលា",
    lfsca4:"បរិស្ថាន",
    lfsca4p:"ចូលរួមសម្អាតបរិស្ថានក្នុងទីធ្លារសាលា",
    lfsca4pp:"សកម្មភាពសិស្សានុសិស្សវិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ចូលរួមសម្អាតបរិស្ថាន និងថង់ប្លាស្ទិក នៅបរិវេណសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ ១៤/មករា/២០២៥",
    //about school
    abtitle: "អំពីសាលា",
    abp:"យើងផ្តល់ការអប់រំគុណភាពខ្ពស់ ដើម្បីអភិវឌ្ឍសិស្សឲ្យមានចំណេះដឹង និងជំនាញសម្រាប់នាពេលអនាគត។",
    abtitle2: "📖ប្រវត្តិសាលា និងសមិទ្ធផល",
    abheader:"វិទ្យាស្ថានអភិស្ថានអភិវអឌ្ឍន៍សហគមន៏",
    abfirst:"១. សេចក្ដីផ្ដើម",
    abfirstitle:"វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ ស្ថិតនៅភូមិ ថ្នល់កែង ឃុំស្មោងជើង",
    abfirstp:"ស្រុកកំចាយមារ ខេត្តព្រៃវែង។ វិទ្យាស្ថានអភិវឌ្ឍន៍សហគមន៍ត្រូវបាន បង្កើតឡើងតាមសេចក្តីប្រកាសលេខ ២៣១១ចុះថ្ងៃទី ១២ ខែមិថុនា ឆ្នាំ ២០១៥ របស់ក្រសួងអប់រំ យុវជន និងកីឡា ស្តីពីការបង្កើតមុខជំនាញនិងដេប៉ាតឺម៉ង់ ចំណុះឱ្យមហាវិទ្យាល័យនិងវិទ្យាស្ថាន នៅសាកលវិទ្យាល័យ ជា ស៊ីម កំចាយមារ។ វិទ្យាស្ថានបានបើកឱ្យដំណើរការនៅ ក្នុងឆ្នាំសិក្សា ២០១៧-២០១៨ ដោយបើកឳកាសដល់សិស្សានុសិស្សទូទៅដើម្បីទទួលបានអាហារូបករណ៍ ទៅលើការសិក្សាជំនាញ អប់រំបច្ចេកទេស វិជ្ជាជីវៈកម្រិត ៩+៣ ដែលមានតម្លៃសមមូលនឹងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិចំណេះទូទៅ និងបំពេញវិជ្ជា។ បច្ចុប្បន្ននេះ វិទ្យាស្ថានបានបណ្តុះ បណ្តាលសិស្សលើ ០៥ មុខជំនាញគឺ គណនេយ្យ ក្សេត្រសាស្ត្រ អេឡិចត្រូនិក វិទ្យាសាស្ត្រកុំព្យូទ័រនិងផលិតកម្មសត្វ និងបសុព្យាបាល ។",
    abse:"១.១ ស្ថានភាពសបុគ្គលិក",   
    abse1:"គណៈគ្រប់គ្រងសរុប ០៣ នាក់ ស្រី ០១ នាក់ បុគ្គលិកការិយាល័យសរុប ០៧ នាក់ ស្រី ០២ នាក់ បុគ្គលិកបង្រៀន",
    abse1p:"០១នាក់ ស្រី០០ នាក់។ បុគ្គលិកផ្នែកចំណេះទូទៅ ដែលបង្រៀននៅ ផ្នែកបច្ចេកទេសសរុប ៣២ នាក់ ស្រី ០៧ នាក់និងបុគ្គលិកបង្រៀនជំនាញបច្ចេកទេសសរុប ៣៧ នាក់ ស្រី ០៨ នាក់ ក្នុងនោះបុគ្គលិកបង្រៀនជំនាញ គណនេយ្យ សរុប ០៦ នាក់ ស្រី ០១ នាក់ ជំនាញ ក្សេត្រសាស្ត្រសរុប ៦ នាក់ ស្រី ១ នាក់ ជំនាញអេឡិចត្រូនិក សរុប ០៩ នាក់ ស្រី ០៣ នាក់ ជំនាញផលិតកម្មសត្វ និងបសុព្យាបាល សរុប ១០ នាក់ ស្រី ០១ នាក់ និងជំនាញវិទ្យាសាស្ត្រ កុំព្យូទ័រ សរុប ៦ នាក់ ស្រី ២ នាក់ និងមន្រ្តីកិច្ចសន្យាសរុប ៤ នាក់ ស្រី ១ នាក់ បុគ្គលិកដែលបង្រៀនក្នុងឆមាសទី១មានចំនួនសរុប ៧៨ នាក់ ស្រី ២០ នាក់ បន្តសិក្សា ០២ នាក់ ស្រី ០១នាក់ (ស្ថិតិ បុគ្គលិកបង្រៀននៅ ឆមាសទី១) និងបុគ្គលិកផ្ទេរការិយាល័យទៅជួយការងារនៅមហាវិទ្យាល័យចំនួន ០៣ នាក់ ស្រី ០០ នាក់។",
    abshcool:"យើងផ្តល់ការអប់រំគុណភាពខ្ពស់ ដើម្បីអភិវឌ្ឍសិស្សឲ្យមានចំណេះដឹង និងជំនាញសម្រាប់នាពេលអនាគត។",
    abtitle3: "ចក្ខុវិស័យ និងបេសកកម្ម",
    abch1:"វិទ្យាស្ថានអភិស្ថានអភិវអឌ្ឍន៍សហគមន៏",
    abch2:"១. សមិទ្ធផលសម្រេចបាន",
    
  
  
  },
  en: {
    //about school


    ach2: "1. Achievements",
    abch1: "Institute of Community Development",
    abtitle3: "Vision and Mission",
    abshcool: "We provide high-quality education to develop students with knowledge and skills for the future.",
    abse1p: "There is 1 person, 0 female. General education staff teaching in the technical department totals 32 persons, 7 females. Technical teaching staff totals 37 persons, 8 females. Among them, Accounting specialization has 6 persons, 1 female; Agronomy has 6 persons, 1 female; Electronics has 9 persons, 3 females; Animal Production and Veterinary Medicine has 10 persons, 1 female; Computer Science has 6 persons, 2 females; and Contract staff totals 4 persons, 1 female.The total number of teaching staff in the first semester is 78 persons, 20 females. Continuing studies: 2 persons, 1 female (statistics of teaching staff in semester 1). In addition, 3 staff members were transferred to work at the faculty office, with 0 female.",
    abse1: "Management staff totals 3 persons, 1 female. Office staff totals 7 persons, 2 females. Teaching staff…",
    abse: "1.1 Staff status",
    abfirstp: "Chea Sim Kamchaymear National University is located in Thnal Kaeng Village, Smoung Cheung Commune, Kamchaymear District, Prey Veng Province. The Institute of Community Development was established by Announcement No. 2311 dated June 12, 2015, of the Ministry of Education, Youth and Sports on the establishment of faculties and departments under the National University of Chea Sim Kamchaymear. The institute started operating in the academic year 2017-2018 by opening opportunities for general students to receive scholarships for studying technical education skills at the vocational level 9+3, which is equivalent to a high school diploma with general knowledge and vocational subjects. Currently, the institute has trained students in 5 majors: Accounting, Agriculture, Electronics, Computer Science, and Animal Husbandry and Veterinary.",
    abfirstitle: "Institute of Community Development of Chea Sim Kamchaymear National University is located at Thnal Kaeng Village, Smoung Cheung Commune",
    abfirst: "1. Introduction",
    abheader: "Institute of Community Development",
    abtitle2: "📖School history and achievements",
    abtitle: "About school",
    abp: "We provide high-quality education to develop students with knowledge and skills for the future.",
    // life skills
    lfsca2:"Environment",
    lfsca2p:"National Environment Day and World Environment Day",
    lfsca2pp:"Activities of students from the Institute of Community Development participating in cleaning the environment and collecting plastic bags within the campus of Chea Sim University of Kamchaymear on April 21, 2025.",
    lfsca3:"Environment",
    lfsca3p:"Participating in environmental cleaning activities within the campus",
    lfsca3pp:"Environmental cleaning activities of students from the Institute of Community Development within the campus of Chea Sim University of Kamchaymear",
    lfsca4:"Environment",
    lfsca4p:"Participating in environmental cleaning activities within the campus",
    lfsca4pp:"Activities of students from the Institute of Community Development participating in cleaning the environment and collecting plastic bags within the campus of Chea Sim University of Kamchaymear on April 14, 2025.",
    lfsca1pp: "On Thursday, the 10th day of the waxing moon of Jeshtha month, Year of the Snake, Saptasak Era, Buddhist Era 2569, corresponding to June 5, 2025.#The Institute of Community Development of Chea Sim Kamchaymear National University celebrated the 29th National Environment Day and World Environment Day and organized an environmental cleaning campaign around the university and along both sides of National Road No. 8.",
    lfsca1p: "National Environment Day and World Environment Day",
    lfsca1: "Environment",
    lfstitle3: "Environmental cleaning activities",
    lfstitlep: "We Provide high-quality education, both knowledge and skills, to develop students with knowledge and skill the future.",
    lfstitle1: "Educational activities",
    lfsc1: "Time for Dhamma education",
    lfsc1p: "Monday, the 6th day of the waning moon of Phalgun month, Year of the Snake, Saptasak Era, Buddhist Era 2569, corresponding to March 9, 2026.#Dhamma Education Program presented by the Venerable Abbot (known as Wat Chor).",
    lfsc2: "Time for Dhamma education",
    lfsc2p: "#Dhamma Education ProgramMonday, the 7th day of the waxing moon of Phalgun month, Year of the Snake, Saptasak Era, Buddhist Era 2569 (Kampucha Calendar), corresponding to February 23, 2026.",
    lfsc3p: "Monday, the 6th day of the waning moon of Jeshtha month, Year of the Snake, Saptasak Era, Buddhist Era 2569, corresponding to June 16, 2025.#The Institute of Community Development of Chea Sim Kamchaymear National University led students in participating in a Dhamma Education Session.",
    lfsc4p: "Monday, the 6th day of the waning moon of Jeshtha month, Year of the Snake, Saptasak Era, Buddhist Era 2569, corresponding to June 16, 2025.#The Institute of Community Development of Chea Sim Kamchaymear National University led students in participating in a Dhamma Education Session.",
    lfsc5p: "Monday, the 14th day of the waxing moon of Jeshtha month, Year of the Snake, Saptasak Era, Buddhist Era 2569, corresponding to June 9, 2025.#The Institute of Community Development of Chea Sim Kamchaymear National University organized a Dhamma Education Program for students enrolled in Technical Education levels 9+1, 9+2, and 9+3. The Dhamma sermon was delivered by the Venerable Abbot of Chottonaram Pagoda (commonly known as Wat Chor).",
    lfsc6p: "On Monday afternoon, 2nd of the waxing moon of the month of Mikak Sire, Year of the Dragon, Chhasek era, Buddhist Era 2568, corresponding to December 2, 2024,The Institute of Community Development of Chea Sim University of Kamchaymear organized a program: “Mind Education” for students pursuing technical education who are studying at the Institute of Community Development for the new academic year (2024–2025).",
    lfstitle: "life skills",
    //footer
    fttitle: "Providing quality education and modern technology",
    fttitlemain: "Institute of Community Development",
    fthome: "Home",
    ftab: "School History",
    ftan: "Anounment",
    ftct: "Conteact",

    //indexpage
    indexev1: "11th National Reading Day",
    indexev1p: "national Reading day under the theme Writing and reading in a new context",
    indexev2: "Student guardian meeting program",
    indexev2p: "Scholarship opening ceremony for a total of 151 technical education student.",
    indexev3: "Sangkran in Chea sim Komchaymear",
    indexev3p: "At the national university of chearsim komchaymear District,Prey Veng Province , on th ocasion of the celebration of the traditional Khmer New Year",
    indextitle4: "Events",
    indexe1: "Events",
    indexe1p: "Please note that will students will be notified that the institute will open new course starting today   . t",
    indexe2: "Activities during the implementation time",
    indexe2p: "During the practical activities, student are researching and browsing various document.",
    indexe3: "life skill",
    indexe3p: "Every monday, all student in institute have to afftend a mental education seasion from a to 5 pm.",
    indexca1: "Computer Science",
    indexca1p: "It is a skill that researches and develops programs to study",
    indexca2: "Agricultute",
    indexca2p: "The profession that researches and develops cultvation and acronomy economics",
    indexca3: "Eletronic",
    indexca3p: "Expertise in researching and developing the use of eletronics and technology",
    indexca4: "Accounting",
    indexca4p: "It is a skill that researches and develops accounting programs in various finacial areas",
    indexca5: "Animal Husbandry",
    indexca5p: "Skill that research and develop animal care and treatmentm , etc,",
    indextitle3: "Latest news",
    indexc1: "Event",
    indexc1p: "Events held inschool to provide quaaltity educcation and other events held by schools",
    indexc2: "Professinal teacher",
    indexc2p: " Taught by professors and specialists in each field and skill with many year of experience",
    indexc3: "Modern library",
    indexc3p: " in the library stduents are doing research and reading various documents.",
    indexSL2: "Mr .Koy Chomnit",
    indexSL2p: "Director of Institute Commnity Development",
    indexSL3: "National Reading Day",
    indexSL3p: "National Reading Day Under the theme << writing and reading in a new context",
    indexSL4: "Exhibition of technical education student' works",
    indexSL4p: "Exhibition of technical education student' works and student parent meeting event",
    indexSL5: "Modern Library",
    indexSL5p: "A Modern library offering clear document and many book",
    indexSL6: "Modern pratice room",
    indexSL6p: "Modern pratice room that provide convenience for students to pratice",
    indexSL1: "Welcome",
    indexSL1p: "Institute Community Development",
    indextitle1: "Qualtity education",

    //Nav bar
    title: "National University of Cheasiem Komchaymear",
    title2: "institute community Deverlopment",
    navinformation: "Information▾",
    navskills: "skills▾",
    navCS: "Computer Science",
    home: "Home",
    contact: "Contact",
    skill: "Skills",
    atvi: "Some pictures and activities of students",
    navlife: "life skills",
    navhistor: "School History",
    navTC: "Teachers",
    naveven: "Event",
    navacti: "Activities,Pratice",
    navLB: "modem library",
    navEC: "Eletronic",
    navAC: "Accounting",
    navAH: "Animal Husbandry",
    navacro: "Agiculture",

  }

};

function applyLang() {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (text[lang][key]) {
      el.innerText = text[lang][key];
    }
  });

  const icon = document.getElementById("langIcon");
  if (icon) {
    icon.src = lang === "kh"
      ? "https://flagcdn.com/w40/kh.png"
      : "https://flagcdn.com/w40/gb.png";
  }
}

function toggleLang() {
  lang = (lang === "kh") ? "en" : "kh";
  localStorage.setItem("lang", lang);
  applyLang();
}

// =======================
// DARK MODE (CLEAN)
// =======================
const modeBtn = document.querySelector(".mode");

if (modeBtn) {
  let theme = localStorage.getItem("theme") || "light";

  function applyTheme() {
    document.body.classList.toggle("dark", theme === "dark");
    modeBtn.innerText = theme === "dark" ? "☀️" : "🎨";
  }

  modeBtn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    applyTheme();
  });

  applyTheme();
}

window.addEventListener("DOMContentLoaded", applyLang);
// =======================
// NAV DROPDOWN FIX
document.querySelectorAll(".dropdown").forEach(drop => {
  const toggle = drop.querySelector(".dropdown-toggle");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();

    // close others
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== drop) d.classList.remove("active");
    });

    // toggle current
    drop.classList.toggle("active");
  });
});

// click outside closes
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach(d => {
    d.classList.remove("active");
  });
});
// hamburger menu handler
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      document.querySelectorAll(".dropdown").forEach(d => {
        d.classList.remove("active");
      });
    }
  });
}

// =======================
// LANGUAGE DROPDOWN HANDLER
// =======================
document.querySelectorAll(".lang-option").forEach(option => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const selectedLang = option.getAttribute("data-lang");
    lang = selectedLang;
    localStorage.setItem("lang", lang);
    applyLang();
    
    // close dropdown
    document.querySelector(".lang-dropdown").classList.remove("active");
  });
});

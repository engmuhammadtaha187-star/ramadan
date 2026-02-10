export type ContentCategory = 'duaa' | 'greeting' | 'quote';

export interface ContentItem {
    id: string;
    text: string;
    category: ContentCategory;
    author?: string; // For quotes/hadith source
}

export const RAMADAN_CONTENT: ContentItem[] = [
    // Duas
    {
        id: 'd1',
        text: 'اللهم بلغنا رمضان، وسلمنا إلى رمضان، وسلم لنا رمضان، وتسلمه منا متقبلا',
        category: 'duaa',
    },
    {
        id: 'd2',
        text: 'اللهم أعنا على صيامه وقيامه، وقراءة القرآن فيه',
        category: 'duaa',
    },
    {
        id: 'd3',
        text: 'اللهم اجعلنا ممن صام رمضان إيمانا واحتسابا',
        category: 'duaa',
    },
    {
        id: 'd4',
        text: 'اللهم طهرنا من الذنوب والخطايا كما ينقى الثوب الأبيض من الدنس',
        category: 'duaa',
    },
    {
        id: 'd5',
        text: 'اللهم إنك عفو تحب العفو فاعف عنا',
        category: 'duaa',
    },
    {
        id: 'd6',
        text: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
        category: 'duaa',
    },

    // Greetings
    {
        id: 'g1',
        text: 'مبارك عليكم الشهر، وتقبل الله طاعتكم',
        category: 'greeting',
    },
    {
        id: 'g2',
        text: 'كل عام وأنتم بخير، أعاده الله عليكم باليمن والبركات',
        category: 'greeting',
    },
    {
        id: 'g3',
        text: 'رمضان كريم، جعله الله شهر خير ورحمة ومغفرة',
        category: 'greeting',
    },
    {
        id: 'g4',
        text: 'عساكم من عواده، وتقبل الله صيامكم وقيامكم',
        category: 'greeting',
    },

    // Quotes (Quran/Hadith)
    {
        id: 'q1',
        text: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ',
        category: 'quote',
        author: 'سورة البقرة: 185',
    },
    {
        id: 'q2',
        text: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        category: 'quote',
        author: 'حديث نبوي شريف',
    },
    {
        id: 'q3',
        text: 'إِذَا جَاءَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ، وَغُلِّقَتْ أَبْوَابُ النَّارِ، وَصُفِّدَتِ الشَّيَاطِينُ',
        category: 'quote',
        author: 'حديث نبوي شريف',
    },
];

export function getRandomContent(excludeId?: string): ContentItem {
    const items = excludeId
        ? RAMADAN_CONTENT.filter(item => item.id !== excludeId)
        : RAMADAN_CONTENT;

    return items[Math.floor(Math.random() * items.length)];
}

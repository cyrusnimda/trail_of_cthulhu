

export type ProfesionDesc = {
    minCredit: number,
    maxCredit: number,
    abilities: string[],
    desc: string
}

export type Profesion = {
    [name: string]:
    ProfesionDesc
}

export const profesions: Profesion = {
    "Alienist": { "minCredit": 3, "maxCredit": 4, "abilities": [], "desc": "A specialist in mental illness, you may be a Vienna-trained    psychoanalyst, a neurologist who studies brain function, or a medical doctor with a strong interest in behavioral science. Although Freudian theories are coming to dominate the field, they are far from universally understood or accepted." },
    "Antiquarian": { "minCredit": 2, "maxCredit": 5, "abilities": [], "desc": "As much a state of mind as a profession, you value the past and willingly immerse yourself in it. You may have a small independent income, you may be a resident scholar at a museum or gallery, or you may condescend to deal in antiques, books, or the objets d’art of a more gracious era." },
    "Archaeologist": { "minCredit": 4, "maxCredit": 5, "abilities": ["Archaeology", "Athletics", "Evidence", "Collection", "First Aid", "History", "Languages", "Library Use", "Riding"], "desc": "You travel to strange, far places to uncover the past. You may be a meticulous scholar, working in libraries and devoting your career to a single dig, or you may be little better than a tomb robber, wielding a bullwhip and pistol to bring trophies back to your museum. You may depend on such treasures to fund your expeditions, or you may get grants from universities and foundations." },
    "Artist": { "minCredit": 1, "maxCredit": 4, "abilities": [], "desc": "Whether you are a painter, a musician, a sculptor, an architect, or even a performer, you follow your Muse where she leads. Sensitive and temperamental, by reputation if not in fact, you already inhabit a demimonde that most never understand." },
    "Author": { "minCredit": 1, "maxCredit": 3, "abilities": ["Art", "History", "Languages", "Library use", "oral History", "Assess Honesty"], "desc": "You use words to capture existence, to conceal yourself, to reveal the truth, or to sell fantasy to Depression-stricken readers. Perhaps all of the above. Your labors are solitary and your rewards sporadic; you may have too much time to think. With discipline and a modicum of skill, though, even a pulp writer can still keep his head above water." },
    "Clergy": { "minCredit": 2, "maxCredit": 5, "abilities": [], "desc": "Itinerant revival preacher, trusted neighborhood priest, scholarly rabbi, or eager missionary, the varieties of clerical life present many of the same challenges to those who listen most intently for God’s  call. You may be predisposed to believe in the supernatural, but you are peculiarly vulnerable to the maltheistic revelations of the Mythos." },
    "Criminal": { "minCredit": 0, "maxCredit": 4, "abilities": [], "desc": "Those who live on the other side of the law are already aware of a secret world of degeneracy, desperation, and evil beneath the normal ways of civilization. Some criminals have built their own codes and laws to shield themselves from the realization that all human order is breakable by acts of will. Others revel in this discovery." },
    "Professor": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Scientist": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Doctor": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Nurse": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Journalist": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Parapsychologist": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Police Detective": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Private Investigator": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Hobo": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Dilettante": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Military": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
    "Pilot": { "minCredit": 0, "maxCredit": 0, "abilities": [], "desc": "desc..." },
}

type Credit = {
    title: string,
    desc: string
}

export const credits: Credit[] = [
    { "title": "Pauper", "desc": "Hobo life; rags; no permanent home; handouts or scavenge" },
    { "title": "Lower Class", "desc": "Janitor, hired hand, or servant; soft cap; flop house, SRO, live with relatives; bus; cans of soup or beans" },
    { "title": "Working Class", "desc": "Factory work or skilled service; hat; tenement apartment; bus; meat most days" },
    { "title": "Lower Middle-Class", "desc": "Clerk or high-skilled service; neckties; shabby apartment; used car in bad condition; good Sunday meals" },
    { "title": "Middle-Class", "desc": "Supervisor, lesser professional; one good suit; bungalow or decent apartment; modest car; restaurant occasionally; part-time cleaning lady" },
    { "title": "Upper Middle-Class", "desc": "Professional; tailored suits; good house or fine apartment; new car or two cars; fine meals in or out; live-in servant" },
    { "title": "Upper Class", "desc": "Independent income or exclusive professional; bespoke suits; mansion or penthouse; luxury cars; luxury dining; multiple domestics" },
    { "title": "Wealthy", "desc": "Landed gentry or industrial fortune; fabulous jewelry; landed estate; yachts or private planes; personal fourstar chef; multi-tiered staff of domestics" }
]



export const academic = [
    "Accounting",
    "Anthropology",
    "Archaeology",
    "Architecture",
    "Art History",
    "Biology",
    "Cthulhu Mythos",
    "Cryptography",
    "Geology",
    "History",
    "Languages",
    "Law",
    "Library use",
    "Medicine",
    "occult",
    "Physics",
    "Theology",
]

export const interpersonal = [
    "Assess Honesty",
    "Bargain",
    "Bureaucracy",
    "Cop Talk",
    "Credit Rating",
    "Flattery",
    "Interrogation",
    "Intimidation",
    "oral History",
    "Reassurance",
    "Streetwise",
]

export const technical = [
    "Art",
    "Astronomy",
    "Chemistry",
    "Craft",
    "Evidence",
    "Collection",
    "Forensics",
    "Locksmith",
    "outdoorsman",
    "Pharmacy",
    "Photography",
]

export const generalAbilities = [
    "Athletics",
    "Conceal",
    "Disguise",
    "Driving",
    "Electrical Repair",
    "Explosives",
    "Filch",
    "Firearms",
    "First Aid",
    "Fleeing",
    "Health",
    "Hypnosis",
    "Magic",
    "Mechanical",
    "Repair",
    "Piloting",
    "Preparedness",
    "Psychoanalysis",
    "Riding",
    "Sanity",
    "Scuffling",
    "Sense Trouble",
    "Shadowing",
    "Stability",
    "Stealth",
    "Weapons",
]
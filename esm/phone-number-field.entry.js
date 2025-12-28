import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';
import { g as getCountryPropByKey, s as sortedCountriesList } from './countriesList-CkZ5wZFN.js';

const flags = {
    AFG: "🇦🇫", // Afghanistan * 
    ARM: "🇦🇲", // Armenia
    AZE: "🇦🇿", // Azerbaijan
    BHR: "🇧🇭", // Bahrain
    BGD: "🇧🇩", // Bangladesh
    BTN: "🇧🇹", // Bhutan
    BRN: "🇧🇳", // Brunei
    KHM: "🇰🇭", // Cambodia
    CHN: "🇨🇳", // China
    CYP: "🇨🇾", // Cyprus
    GEO: "🇬🇪", // Georgia
    IND: "🇮🇳", // India
    IDN: "🇮🇩", // Indonesia
    IRN: "🇮🇷", // Iran
    IRQ: "🇮🇶", // Iraq
    // ISR: "🇮🇱", // Israel
    JPN: "🇯🇵", // Japan
    JOR: "🇯🇴", // Jordan
    KAZ: "🇰🇿", // Kazakhstan
    KWT: "🇰🇼", // Kuwait
    KGZ: "🇰🇬", // Kyrgyzstan
    LAO: "🇱🇦", // Laos
    LBN: "🇱🇧", // Lebanon
    MYS: "🇲🇾", // Malaysia
    MDV: "🇲🇻", // Maldives
    MNG: "🇲🇳", // Mongolia
    MMR: "🇲🇲", // Myanmar
    NPL: "🇳🇵", // Nepal
    PRK: "🇰🇵", // North Korea
    OMN: "🇴🇲", // Oman
    PAK: "🇵🇰", // Pakistan
    PSE: "🇵🇸", // Palestine
    PHL: "🇵🇭", // Philippines
    QAT: "🇶🇦", // Qatar
    SAU: "🇸🇦", // Saudi Arabia
    SGP: "🇸🇬", // Singapore
    KOR: "🇰🇷", // South Korea
    LKA: "🇱🇰", // Sri Lanka
    SYR: "🇸🇾", // Syria
    TWN: "🇹🇼", // Taiwan
    TJK: "🇹🇯", // Tajikistan
    THA: "🇹🇭", // Thailand
    TLS: "🇹🇱", // Timor-Leste
    TUR: "🇹🇷", // Turkey
    TKM: "🇹🇲", // Turkmenistan
    ARE: "🇦🇪", // United Arab Emirates
    UZB: "🇺🇿", // Uzbekistan
    VNM: "🇻🇳", // Vietnam
    YEM: "🇾🇪", // Yemen
    DZA: "🇩🇿", // Algeria
    AGO: "🇦🇴", // Angola
    BEN: "🇧🇯", // Benin
    BWA: "🇧🇼", // Botswana
    BFA: "🇧🇫", // Burkina Faso
    BDI: "🇧🇮", // Burundi
    CPV: "🇨🇻", // Cape Verde
    CMR: "🇨🇲", // Cameroon
    CAF: "🇨🇫", // Central African Republic
    TCD: "🇹🇩", // Chad
    COM: "🇰🇲", // Comoros
    COD: "🇨🇩", // Congo (Democratic Republic)
    COG: "🇨🇬", // Congo (Republic)
    CIV: "🇨🇮", // Côte d'Ivoire
    DJI: "🇩🇯", // Djibouti
    EGY: "🇪🇬", // Egypt
    GNQ: "🇬🇶", // Equatorial Guinea
    ERI: "🇪🇷", // Eritrea
    SWZ: "🇸🇿", // Eswatini
    ETH: "🇪🇹", // Ethiopia
    GAB: "🇬🇦", // Gabon
    GMB: "🇬🇲", // Gambia
    GHA: "🇬🇭", // Ghana
    GIN: "🇬🇳", // Guinea
    GNB: "🇬🇼", // Guinea-Bissau
    KEN: "🇰🇪", // Kenya
    LSO: "🇱🇸", // Lesotho
    LBR: "🇱🇷", // Liberia
    LBY: "🇱🇾", // Libya
    MDG: "🇲🇬", // Madagascar
    MWI: "🇲🇼", // Malawi
    MLI: "🇲🇱", // Mali
    MRT: "🇲🇷", // Mauritania
    MUS: "🇲🇺", // Mauritius
    MAR: "🇲🇦", // Morocco
    MOZ: "🇲🇿", // Mozambique
    NAM: "🇳🇦", // Namibia
    NER: "🇳🇪", // Niger
    NGA: "🇳🇬", // Nigeria
    RWA: "🇷🇼", // Rwanda
    STP: "🇸🇹", // Sao Tome and Principe
    SEN: "🇸🇳", // Senegal
    SYC: "🇸🇨", // Seychelles
    SLE: "🇸🇱", // Sierra Leone
    SOM: "🇸🇴", // Somalia
    ZAF: "🇿🇦", // South Africa
    SSD: "🇸🇸", // South Sudan
    SDN: "🇸🇩", // Sudan
    TZA: "🇹🇿", // Tanzania
    TGO: "🇹🇬", // Togo
    TUN: "🇹🇳", // Tunisia
    UGA: "🇺🇬", // Uganda
    ZMB: "🇿🇲", // Zambia
    ZWE: "🇿🇼", // Zimbabwe
    ALB: "🇦🇱", // Albania
    AND: "🇦🇩", // Andorra
    AUT: "🇦🇹", // Austria
    BLR: "🇧🇾", // Belarus
    BEL: "🇧🇪", // Belgium
    BIH: "🇧🇦", // Bosnia and Herzegovina
    BGR: "🇧🇬", // Bulgaria
    HRV: "🇭🇷", // Croatia
    CZE: "🇨🇿", // Czechia
    DNK: "🇩🇰", // Denmark
    EST: "🇪🇪", // Estonia
    FIN: "🇫🇮", // Finland
    FRA: "🇫🇷", // France
    DEU: "🇩🇪", // Germany
    GRC: "🇬🇷", // Greece
    HUN: "🇭🇺", // Hungary
    ISL: "🇮🇸", // Iceland
    IRL: "🇮🇪", // Ireland
    ITA: "🇮🇹", // Italy
    LVA: "🇱🇻", // Latvia
    LIE: "🇱🇮", // Liechtenstein
    LTU: "🇱🇹", // Lithuania
    LUX: "🇱🇺", // Luxembourg
    MLT: "🇲🇹", // Malta
    MDA: "🇲🇩", // Moldova
    MCO: "🇲🇨", // Monaco
    MNE: "🇲🇪", // Montenegro
    NLD: "🇳🇱", // Netherlands
    MKD: "🇲🇰", // North Macedonia
    NOR: "🇳🇴", // Norway
    POL: "🇵🇱", // Poland
    PRT: "🇵🇹", // Portugal
    ROU: "🇷🇴", // Romania
    RUS: "🇷🇺", // Russia
    SMR: "🇸🇲", // San Marino
    SRB: "🇷🇸", // Serbia
    SVK: "🇸🇰", // Slovakia
    SVN: "🇸🇮", // Slovenia
    ESP: "🇪🇸", // Spain
    SWE: "🇸🇪", // Sweden
    CHE: "🇨🇭", // Switzerland
    UKR: "🇺🇦", // Ukraine
    GBR: "🇬🇧", // United Kingdom
    VAT: "🇻🇦", // Vatican City
    ATG: "🇦🇬", // Antigua and Barbuda
    ARG: "🇦🇷", // Argentina
    BHS: "🇧🇸", // Bahamas
    BRB: "🇧🇧", // Barbados
    BLZ: "🇧🇿", // Belize
    BOL: "🇧🇴", // Bolivia
    BRA: "🇧🇷", // Brazil
    CAN: "🇨🇦", // Canada
    CHL: "🇨🇱", // Chile
    COL: "🇨🇴", // Colombia
    CRI: "🇨🇷", // Costa Rica
    CUB: "🇨🇺", // Cuba
    DMA: "🇩🇲", // Dominica
    DOM: "🇩🇴", // Dominican Republic
    ECU: "🇪🇨", // Ecuador
    SLV: "🇸🇻", // El Salvador
    GRD: "🇬🇩", // Grenada
    GTM: "🇬🇹", // Guatemala
    GUY: "🇬🇾", // Guyana
    HTI: "🇭🇹", // Haiti
    HND: "🇭🇳", // Honduras
    JAM: "🇯🇲", // Jamaica
    MEX: "🇲🇽", // Mexico
    NIC: "🇳🇮", // Nicaragua
    PAN: "🇵🇦", // Panama
    PRY: "🇵🇾", // Paraguay
    PER: "🇵🇪", // Peru
    KNA: "🇰🇳", // Saint Kitts and Nevis
    LCA: "🇱🇨", // Saint Lucia
    VCT: "🇻🇨", // Saint Vincent and the Grenadines
    SUR: "🇸🇷", // Suriname
    TTO: "🇹🇹", // Trinidad and Tobago
    USA: "🇺🇸", // United States
    URY: "🇺🇾", // Uruguay
    VEN: "🇻🇪", // Venezuela
    ESH: "🇪🇭", // Western Sahara
    MYT: "🇾🇹", // Mayotte
    REU: "🇷🇪", // Réunion
    SHN: "🇸🇭", // Saint Helena, Ascension and Tristan da Cunha
    XKX: "🇽🇰", // Kosovo
    GRL: "🇬🇱", // Greenland
    SPM: "🇵🇲", // Saint Pierre and Miquelon
    BMU: "🇧🇲", // Bermuda
    FLK: "🇫🇰", // Falkland Islands
    GUF: "🇬🇫", // French Guiana
    GLP: "🇬🇵", // Guadeloupe
    MTQ: "🇲🇶", // Martinique
    MSR: "🇲🇸", // Montserrat
    ABW: "🇦🇼", // Aruba
    CUW: "🇨🇼", // Curaçao
    SXM: "🇸🇽", // Sint Maarten
    AIA: "🇦🇮", // Anguilla
    BES: "🇧🇶", // Bonaire, Sint Eustatius and Saba
    VGB: "🇻🇬", // British Virgin Islands
    CYM: "🇰🇾", // Cayman Islands
    TCA: "🇹🇨", // Turks and Caicos Islands
    BLM: "🇧🇱", // Saint Barthélemy
    MAF: "🇲🇫", // Saint Martin
    AUS: "🇦🇺", // Australia
    NZL: "🇳🇿", // New Zealand
    FJI: "🇫🇯", // Fiji
    PNG: "🇵🇬", // Papua New Guinea
    SLB: "🇸🇧", // Solomon Islands
    VUT: "🇻🇺", // Vanuatu
    WSM: "🇼🇸", // Samoa
    TON: "🇹🇴", // Tonga
    FSM: "🇫🇲", // Micronesia
    PLW: "🇵🇼", // Palau
    MHL: "🇲🇭", // Marshall Islands
    KIR: "🇰🇷", // Kiribati
    NRU: "🇳🇷", // Nauru
    TUV: "🇹🇻", // Tuvalu
};

const phoneNumberFieldCss = "";

const PhoneNumberField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    language;
    isInvalid;
    isHidden;
    isDisabled;
    values = { countryCode: '', phoneNumber: '' };
    isTouched = false;
    valueChanged;
    fieldBlurred;
    validationErrors = [];
    connectedCallback() {
        const [countryCode, phoneNumber] = (this.field.value || '').split('-');
        this.values = { countryCode: countryCode || this.field.defaultCountryCode || '+962', phoneNumber: phoneNumber || '' };
        this.valueChanged.emit({ key: this.field.key, value: `${this.values.countryCode}-${this.values.phoneNumber}` });
    }
    handleBlur() {
        this.isTouched = true;
        this.fieldBlurred.emit({ key: this.field.key });
    }
    updateValue(property, e) {
        const value = e.target.value;
        const { ...values } = this.values;
        values[property] = value;
        this.values = values;
        const number = values.phoneNumber.startsWith('0')
            ? values.phoneNumber.slice(1)
            : values.phoneNumber;
        this.valueChanged.emit({ key: this.field.key, value: `${this.values.countryCode}-${number}` });
    }
    render() {
        if (this.isHidden) {
            return null;
        }
        const alpha_3_code = getCountryPropByKey('country_code', this.values.countryCode, `alpha_3_code`) || 'N/A';
        return (h("section", { class: `phone-number-field-section ${this.language}` }, h("div", { class: `${this.isInvalid ? 'invalid' : 'valid'} ${this.isTouched ? 'touched' : 'untouched'}` }, h("select", { id: `${this.field.key}-countryCode`, onChange: (e) => this.updateValue('countryCode', e), disabled: this.isDisabled }, h("option", { value: "", selected: !this.values.countryCode }, "Select an option"), sortedCountriesList(this.language)?.map(option => {
            const optionValue = option['country_code'];
            const optionLabel = option[`short_name_${this.language}`];
            const optionFlag = flags[option['alpha_3_code']];
            return (h("option", { value: optionValue, selected: optionValue === this.values.countryCode }, optionLabel, " ", optionFlag));
        })), h("label", { htmlFor: `${this.field.key}-countryCode`, dir: 'ltr' }, h("span", { style: { fontSize: '24px' } }, flags[alpha_3_code]), "\u00A0", alpha_3_code), h("input", { dir: "ltr", id: this.field.key, type: 'tel', autoComplete: "off", disabled: this.isDisabled, placeholder: 'Phone Number', onInput: (e) => this.updateValue('phoneNumber', e), onBlur: this.handleBlur.bind(this) })), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
PhoneNumberField.style = phoneNumberFieldCss;

export { PhoneNumberField as phone_number_field };
//# sourceMappingURL=phone-number-field.entry.js.map

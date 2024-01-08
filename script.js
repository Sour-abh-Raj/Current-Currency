const options = [
  { currency: "UAE Dirham", key: "AED" },
  { currency: "Afghani", key: "AFN" },
  { currency: "Lek", key: "ALL" },
  { currency: "Armenian Dram", key: "AMD" },
  { currency: "Netherlands Antillean Guilder", key: "ANG" },
  { currency: "Kwanza", key: "AOA" },
  { currency: "Argentine Peso", key: "ARS" },
  { currency: "Australian Dollar", key: "AUD" },
  { currency: "Aruban Florin", key: "AWG" },
  { currency: "Azerbaijanian Manat", key: "AZN" },
  { currency: "Convertible Mark", key: "BAM" },
  { currency: "Barbados Dollar", key: "BBD" },
  { currency: "Taka", key: "BDT" },
  { currency: "Bulgarian Lev", key: "BGN" },
  { currency: "Bahraini Dinar", key: "BHD" },
  { currency: "Burundi Franc", key: "BIF" },
  { currency: "Bermudian Dollar", key: "BMD" },
  { currency: "Brunei Dollar", key: "BND" },
  { currency: "Boliviano", key: "BOB" },
  { currency: "Mvdol", key: "BOV" },
  { currency: "Brazilian Real", key: "BRL" },
  { currency: "Bahamian Dollar", key: "BSD" },
  { currency: "Ngultrum", key: "BTN" },
  { currency: "Pula", key: "BWP" },
  { currency: "Belarussian Ruble", key: "BYN" },
  { currency: "Belize Dollar", key: "BZD" },
  { currency: "Canadian Dollar", key: "CAD" },
  { currency: "Congolese Franc", key: "CDF" },
  { currency: "Swiss Franc", key: "CHF" },
  { currency: "Unidades de fomento", key: "CLF" },
  { currency: "Chilean Peso", key: "CLP" },
  { currency: "Yuan Renminbi", key: "CNY" },
  { currency: "Colombian Peso", key: "COP" },
  { currency: "Costa Rican Colon", key: "CRC" },
  { currency: "Peso Convertible", key: "CUC" },
  { currency: "Cuban Peso", key: "CUP" },
  { currency: "Cape Verde Escudo", key: "CVE" },
  { currency: "Czech Koruna", key: "CZK" },
  { currency: "Djibouti Franc", key: "DJF" },
  { currency: "Danish Krone", key: "DKK" },
  { currency: "Dominican Peso", key: "DOP" },
  { currency: "Algerian Dinar", key: "DZD" },
  { currency: "Egyptian Pound", key: "EGP" },
  { currency: "Nakfa", key: "ERN" },
  { currency: "Ethiopian Birr", key: "ETB" },
  { currency: "Euro", key: "EUR" },
  { currency: "Fiji Dollar", key: "FJD" },
  { currency: "Falkland Islands Pound", key: "FKP" },
  { currency: "Pound Sterling", key: "GBP" },
  { currency: "Lari", key: "GEL" },
  { currency: "Ghana Cedi", key: "GHS" },
  { currency: "Gibraltar Pound", key: "GIP" },
  { currency: "Dalasi", key: "GMD" },
  { currency: "Guinea Franc", key: "GNF" },
  { currency: "Quetzal", key: "GTQ" },
  { currency: "Guyana Dollar", key: "GYD" },
  { currency: "Hong Kong Dollar", key: "HKD" },
  { currency: "Lempira", key: "HNL" },
  { currency: "Croatian Kuna", key: "HRK" },
  { currency: "Gourde", key: "HTG" },
  { currency: "Forint", key: "HUF" },
  { currency: "Rupiah", key: "IDR" },
  { currency: "New Israeli Sheqel", key: "ILS" },
  { currency: "Indian Rupee", key: "INR" },
  { currency: "Iraqi Dinar", key: "IQD" },
  { currency: "Iranian Rial", key: "IRR" },
  { currency: "Iceland Krona", key: "ISK" },
  { currency: "Jamaican Dollar", key: "JMD" },
  { currency: "Jordanian Dinar", key: "JOD" },
  { currency: "Yen", key: "JPY" },
  { currency: "Kenyan Shilling", key: "KES" },
  { currency: "Som", key: "KGS" },
  { currency: "Riel", key: "KHR" },
  { currency: "Comoro Franc", key: "KMF" },
  { currency: "North Korean Won", key: "KPW" },
  { currency: "Won", key: "KRW" },
  { currency: "Kuwaiti Dinar", key: "KWD" },
  { currency: "Cayman Islands Dollar", key: "KYD" },
  { currency: "Tenge", key: "KZT" },
  { currency: "Kip", key: "LAK" },
  { currency: "Lebanese Pound", key: "LBP" },
  { currency: "Sri Lanka Rupee", key: "LKR" },
  { currency: "Liberian Dollar", key: "LRD" },
  { currency: "Loti", key: "LSL" },
  { currency: "Lithuanian Litas", key: "LTL" },
  { currency: "Latvian Lats", key: "LVL" },
  { currency: "Libyan Dinar", key: "LYD" },
  { currency: "Moroccan Dirham", key: "MAD" },
  { currency: "Moldovan Leu", key: "MDL" },
  { currency: "Malagasy Ariary", key: "MGA" },
  { currency: "Denar", key: "MKD" },
  { currency: "Kyat", key: "MMK" },
  { currency: "Tugrik", key: "MNT" },
  { currency: "Pataca", key: "MOP" },
  { currency: "Ouguiya", key: "MRO" },
  { currency: "Mauritius Rupee", key: "MUR" },
  { currency: "Rufiyaa", key: "MVR" },
  { currency: "Kwacha", key: "MWK" },
  { currency: "Mexican Peso", key: "MXN" },
  { currency: "Malaysian Ringgit", key: "MYR" },
  { currency: "Mozambique Metical", key: "MZN" },
  { currency: "Namibia Dollar", key: "NAD" },
  { currency: "Naira", key: "NGN" },
  { currency: "Cordoba Oro", key: "NIO" },
  { currency: "Norwegian Krone", key: "NOK" },
  { currency: "Nepalese Rupee", key: "NPR" },
  { currency: "New Zealand Dollar", key: "NZD" },
  { currency: "Rial Omani", key: "OMR" },
  { currency: "Balboa", key: "PAB" },
  { currency: "Sol", key: "PEN" },
  { currency: "Kina", key: "PGK" },
  { currency: "Philippine Peso", key: "PHP" },
  { currency: "Pakistan Rupee", key: "PKR" },
  { currency: "Zloty", key: "PLN" },
  { currency: "Guarani", key: "PYG" },
  { currency: "Qatari Rial", key: "QAR" },
  { currency: "New Romanian Leu", key: "RON" },
  { currency: "Serbian Dinar", key: "RSD" },
  { currency: "Russian Ruble", key: "RUB" },
  { currency: "Rwanda Franc", key: "RWF" },
  { currency: "Saudi Riyal", key: "SAR" },
  { currency: "Solomon Islands Dollar", key: "SBD" },
  { currency: "Seychelles Rupee", key: "SCR" },
  { currency: "Sudanese Pound", key: "SDG" },
  { currency: "Swedish Krona", key: "SEK" },
  { currency: "Singapore Dollar", key: "SGD" },
  { currency: "Saint Helena Pound", key: "SHP" },
  { currency: "Leone", key: "SLL" },
  { currency: "Somali Shilling", key: "SOS" },
  { currency: "Surinam Dollar", key: "SRD" },
  { currency: "South Sudanese Pound", key: "SSP" },
  { currency: "Dobra", key: "STD" },
  { currency: "El Salvador Colon", key: "SVC" },
  { currency: "Syrian Pound", key: "SYP" },
  { currency: "Lilangeni", key: "SZL" },
  { currency: "Baht", key: "THB" },
  { currency: "Somoni", key: "TJS" },
  { currency: "Turkmenistan New Manat", key: "TMT" },
  { currency: "Tunisian Dinar", key: "TND" },
  { currency: "Pa’anga", key: "TOP" },
  { currency: "Turkish Lira", key: "TRY" },
  { currency: "Trinidad and Tobago Dollar", key: "TTD" },
  { currency: "New Taiwan Dollar", key: "TWD" },
  { currency: "Tanzanian Shilling", key: "TZS" },
  { currency: "Hryvnia", key: "UAH" },
  { currency: "Uganda Shilling", key: "UGX" },
  { currency: "US Dollar", key: "USD" },
  { currency: "Peso Uruguayo", key: "UYU" },
  { currency: "Uzbekistan Sum", key: "UZS" },
  { currency: "Bolivar", key: "VEF" },
  { currency: "Dong", key: "VND" },
  { currency: "Vatu", key: "VUV" },
  { currency: "Tala", key: "WST" },
  { currency: "CFA Franc BEAC", key: "XAF" },
  { currency: "East Caribbean Dollar", key: "XCD" },
  { currency: "CFA Franc BCEAO", key: "XOF" },
  { currency: "CFP Franc", key: "XPF" },
  { currency: "Yemeni Rial", key: "YER" },
  { currency: "Rand", key: "ZAR" },
  { currency: "Zambian Kwacha", key: "ZMW" },
  { currency: "Zimbabwe Dollar", key: "ZWL" },
];

document.addEventListener("DOMContentLoaded", function () {
  const baseCurrencySelect = document.getElementById("base-currency");
  const comparisonCurrenciesSelect = document.getElementById(
    "comparison-currencies"
  );
  options.forEach(function (option) {
    const baseOption = document.createElement("option");
    baseOption.value = option.key;
    baseOption.textContent = option.currency;
    baseCurrencySelect.appendChild(baseOption);

    const comparisonOption = document.createElement("option");
    comparisonOption.value = option.key;
    comparisonOption.textContent = option.currency;
    comparisonCurrenciesSelect.appendChild(comparisonOption);
  });
});

function getCurrencyComparisonPlot() {
  const baseCurrencySelect = document.getElementById("base-currency");
  const comparisonCurrenciesSelect = document.getElementById(
    "comparison-currencies"
  );

  const baseCurrencyValue = baseCurrencySelect.value;
  const comparisonCurrencyValues = Array.from(
    comparisonCurrenciesSelect.selectedOptions
  ).map((option) => option.value);
  const error = document.getElementById("error");
  const resultData = document.getElementById("result-data");

  const apiBaseUrl = "https://api.currencybeacon.com/v1/latest";
  $.ajax({
    url: apiBaseUrl,
    data: {
      api_key: "w956aJHHb2X1MyvNVIqWebJSYTusgsQ7",
      base: baseCurrencyValue.toString().trim(),
      symbols: comparisonCurrencyValues.join(","),
    },
    success: function (response) {
      console.log(response);
      resultData.innerHTML = `
        <span class="subtitle">Current Rates :</span>
        <br>
        <span>Base Currency: ${response.base}</span><br>
        <span>Rates:</span><br>
        <ul>
          ${Object.entries(response.rates)
            .map(([currency, rate]) => `<li>${currency}: ${rate}</li>`)
            .join("")}
        </ul>
      `;

      // Normalize rate data
      const maxRate = Math.max(...Object.values(response.rates));
      const normalizedRates = Object.entries(response.rates).map(
        ([currency, rate]) => ({
          currency,
          rate: rate / maxRate,
        })
      );

      var data = [
        {
          type: "bar",
          x: normalizedRates.map((rate) => rate.rate),
          y: normalizedRates.map((rate) => rate.currency),
          orientation: "h",
        },
      ];

      var layout = {
        // margin: { t: 10, r: 10, b: 10, l: 10 },
        // padding: { t: 10, r: 10, b: 10, l: 10 },
        spacing: 10,
        // Add any additional styling options here
      };

      Plotly.newPlot("graph", data, layout);
      error.textContent = "";
    },

    error: function (error) {
      error.textContent = "Error received while fetching data: " + error;
      console.error("Error:", error);
    },
  });
}

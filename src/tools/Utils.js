import lang from "./Lang";
// Utils
// general and useful functions to project.
//

export function _t(key, values = null) {
  return lang.t(key, values);
}

export function assetFinder(assets, search) {
  let foundAsset = assets.find((asset) => {
    if (asset.symbol.toLowerCase() === search.toLowerCase()) return asset;
  });
  if (foundAsset) return foundAsset;
  else return null;
}

Number.prototype.customFormat = function (n, x, s, c) {
  let re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
    num = this.toFixed(Math.max(0, ~~n));
  return (c ? num.replace(".", c) : num).replace(
    new RegExp(re, "g"),
    "$&" + (s || ",")
  );
};

String.prototype.toPersianDigits = function () {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

export function formatNumber(number, fa = true, split = true) {
  try {
    let addFormat = "";
    if (split)
      if (100000000000 <= number + 0) {
        number = number / 1000000;
        addFormat = " Million";
      }
    let str = parseInt(number, 10).customFormat(0, 3, ",") + addFormat;
    if (!fa) return str;
    return enToFa(str);
  } catch (e) {
    console.error(e);
    return number;
  }
}

export function enToFa(string) {
  return string.toPersianDigits();
}

export function fileSize(fileSize) {
  try {
    if (!fileSize) return "...";
    return fileSize.toFixed(1) + "m";
  } catch (e) {
    return 0;
  }
}

export function pushOrMergeToArray(array, new_object, key = "id") {
  try {
    let index = array.findIndex((item) => item[key] === new_object[key]);
    if (index === -1) array.push(new_object);
    else array[index] = { ...array[index], ...new_object };

    if (Array.isArray(array)) {
      uniqueArray(array, key);
    }

    return array;
  } catch (e) {
    return [];
  }
}

export function uniqueArray(array, key = "id") {
  try {
    let new_array = [];
    array.filter(function (item) {
      let result = new_array.findIndex((x) => x[key] === item[key]);
      if (result < 0) new_array.push(item);
    });
    return new_array;
  } catch (e) {
    return array;
  }
}

export function calculateFileSize(bytes) {
  try {
    let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (!bytes || bytes == 0) return "0 Byte";
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  } catch (e) {
    return "0 Byte";
  }
}

export function findOptions(options, key, value_key = "") {
  if (!options || !Array.isArray(options) || options.length === 0) return [];
  let result = options.filter((item) => item && item.key === key);
  if (value_key === "") return result;
  return result.map((item) => item[value_key]);
}

export function findOption(options, key, value_key = "") {
  let items = findOptions(options, key);
  if (!items || !Array.isArray(items) || items.length === 0) return "";
  return items[0][value_key];
}

export function getFileExtension(path) {
  if (!path) return;
  return path.split(".").pop();
}

export function currency_formatter(number, local = "se-SE", currency = "SEK") {
  return new Intl.NumberFormat(`${local}`, {
    style: "currency",
    currency: `${currency}`,
  }).format(number);
}

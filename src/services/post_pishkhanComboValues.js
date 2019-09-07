const licensePPComboValues = {
    licenseStatus: [
        { value: "valid", label: "دارای اعتبار" },
        { value: "invalid", label: "پایان اعتبار" },
        { value: "expire", label: "لغو پروانه" },
        { value: "renewal", label: "در دست بررسی - تمدید" },
        { value: "suspend", label: "تعلیق" },
        { value: "rename", label: "در دست بررسی - تغییرنام" },
        { value: "displacement", label: "در دست بررسی - تغییر مکان" },
    ],
    activityStatus: [
        { value: "active", label: "فعال" },
        { value: "inactive", label: "غیر فعال" },
    ],
    ownerType: [
        { value: "natural", label: "حقیقی" },
        { value: "legal", label: "حقوقی" },
    ],
    possessionType: [
        { value: "personal", label: "شخصی" },
        { value: "leased", label: "استیجاری" },
    ]
}

export { licensePPComboValues }
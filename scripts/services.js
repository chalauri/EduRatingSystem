
EduRate.factory("dataProvider", function ($q) {

    return {
        loadUniversitiesList: function () {
            var universityNames =
                [
                    { fullName: "კვერნაძის უნივერსიტეტი", id: 1 },
                    { fullName: "თავისუფალი უნივერსიტეტი", id: 2 },
                    { fullName: "თბილისის სახელმწიფო უნივერსიტეტი", id: 3 },
                    { fullName: "კავკასიის უნივერსიტეტი", id: 4 },
                    { fullName: "ილიაუნი", id: 5 },
                    { fullName: "აგრარული უნივერსიტეტი", id: 6 },
                    { fullName: "ტექნიკური უნივერსიტეტი", id: 7 },
                    { fullName: "სდასუ", id: 8 },
                    { fullName: "ეროვნული უნივერსიტეტი", id: 9 },
                    { fullName: "საქართველოს უნივერსიტეტი", id: 10 },
                ];
    		 
            // return promise (because in future we need $get & $post result promises)
            return $q.resolve(universityNames);

        },
        
        loadCategoriesBySpecialityId : function(specialityId){
            var categories =[
                { name: "სწავლების დონე"},
                { name: "ინფრასტრუქტურა" },
                { name: "ხელმისაწვდომობა(ბიუჯეტის კუთხით)" }
            ];
            return  $q.resolve(categories);
        },
        
        loadSpecialitiesByUniId : function(suniId){
            var categories =[
                { name: "ინფორმაციული ტექნოლოგიები"},
                { name: "ეკონომიკა და ბიზნესი" },
                { name: "ჰუმანიტარული მეცნიერებები" }
            ];
            return  $q.resolve(categories);
        },


        loadUniversityRatingById: function (uniId) {
            var universitiesArray = [
                {
                    id: 1,
                    fullName: "სულხან კვერნაძის უნივერსიტეტი",
                    keyName: 'kvernadze',
                    webpage: "www.kvernadze.any.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "100",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "100",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "100",
                                },
                            ]
                        },

                    ]
                },
                {
                    id: 2,
                    fullName: "თავისუფალი უნივერსიტეტი",
                    keyName: 'freeuni',
                    webpage: "www.freeuni.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "91",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "30",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "100",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "92",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "22",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "95",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "80",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "30",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "90",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 3,
                    fullName: "თსუ",
                    keyName: 'tsu',
                    webpage: "www.tsu.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "75",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "45",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "60",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "30",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "85",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "20",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 4,
                    fullName: "კავკასიის უნივერსიტეტი",
                    keyName: 'cu',
                    webpage: "www.cu.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "88",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "75",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "45",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "70",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "80",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "75",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "40",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "50",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "75",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "40",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "40",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 5,
                    fullName: "ილიას უნივერსიტეტი",
                    keyName: 'iliauni',
                    webpage: "www.iliauni.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "30",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "60",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "64",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "25",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "69",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "64",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "30",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 6,
                    fullName: "აგრარული უნივერსიტეტი",
                    keyName: 'agruni',
                    webpage: "www.agruni.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "64",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "40",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "55",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "64",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "40",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "100",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "100",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "25",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 7,
                    fullName: "ტექნიკური უნივერსიტეტი",
                    keyName: 'stu',
                    webpage: "www.stu.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "35",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "30",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "25",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "40",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "40",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "15",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "40",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "40",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "70",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "15",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 8,
                    fullName: "დავით აღმაშენებლის უნივერსიტეტი",
                    keyName: 'sdasu',
                    webpage: "www.sdasu.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "-1",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "40",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "50",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "30",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "45",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "45",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "20",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "45",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "19",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 9,
                    fullName: "საქართველოს ეროვნული უნივერსიტეტი",
                    keyName: 'seu',
                    webpage: "www.seu.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "50",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "60",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "29",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "60",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "60",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "20",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "60",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "60",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "24",
                                },
                            ]
                        },

                    ]
                }, {
                    id: 10,
                    fullName: "საქართველოს უნივერსიტეტი",
                    keyName: 'ug',
                    webpage: "www.ug.edu.ge",
                    categories: [
                        {
                            name: 'ინფორმატიკა',
                            keyName: "informatics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "დასაქმება",
                                    ratingPercent: "40",
                                },
                            ]
                        }, {
                            name: 'ეკონომიკა და ბიზნესი',
                            keyName: "economics",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "70",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "60",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "30",
                                },
                            ]
                        }, {
                            name: 'ჰუმანიტარული მეცნიერებები',
                            keyName: "humanitar",
                            ratings: [
                                {
                                    name: "სწავლების დონე",
                                    ratingPercent: "69",
                                },
                                {
                                    name: "ინფრასტრუქტურა",
                                    ratingPercent: "65",
                                },
                                {
                                    name: "ხელმისაწვდომობა",
                                    ratingPercent: "60",
                                }, {
                                    name: "დასაქმება",
                                    ratingPercent: "25",
                                },
                            ]
                        },

                    ]
                },
            ]; // end of array
            
            // TODO send request to the server to load data
            for (var i = 0; i < universitiesArray.length; i++) {
                var objId = universitiesArray[i].id;
                if (objId == uniId) {
                    //return promise
                    return $q.resolve(universitiesArray[i]);
                }
            }



        },

        loadUniversitySummaries: function () {
            //TODO load data from the server
        	
            var dataArray = [
                {
                    id: 1,
                    fullName: "სულხან კვერნაძის უნივერსიტეტი",
                    keyName: 'kvernadze',
                    webpage: "www.kvernadze.any.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "100",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "100",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "100",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "100",
                        },
                    ]
                },
                {
                    id: 2,
                    fullName: "თავისუფალი უნივერსიტეტი",
                    keyName: 'freeuni',
                    webpage: "www.freeuni.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "89",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "76",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "26",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "90",
                        },
                    ]
                }, {
                    id: 3,
                    fullName: "თსუ",
                    keyName: 'tsu',
                    webpage: "www.tsu.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "67",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "45",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "70",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "45",
                        },
                    ]
                }, {
                    id: 4,
                    fullName: "კავკასიის უნივერსიტეტი",
                    keyName: 'cu',
                    webpage: "www.cu.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "75",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "76",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "35",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "60",
                        },
                    ]
                }, {
                    id: 5,
                    fullName: "ილიას უნივერსიტეტი",
                    keyName: 'iliauni',
                    webpage: "www.iliauni.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "51",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "56",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "70",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "38",
                        },
                    ]
                }, {
                    id: 6,
                    fullName: "აგრარული უნივერსიტეტი",
                    keyName: 'agruni',
                    webpage: "www.agruni.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "58",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "70",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "64",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "40",
                        },
                    ]
                }, {
                    id: 7,
                    fullName: "ტექნიკური უნივერსიტეტი",
                    keyName: 'stu',
                    webpage: "www.stu.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "38",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "21",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "70",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "30",
                        },
                    ]
                }, {
                    id: 8,
                    fullName: "დავით აღმაშენებლის უნივერსიტეტი",
                    keyName: 'sdasu',
                    webpage: "www.sdasu.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "50",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "56",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "55",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "30",
                        },
                    ]
                }, {
                    id: 9,
                    fullName: "საქართველოს ეროვნული უნივერსიტეტი",
                    keyName: 'seu',
                    webpage: "www.seu.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "55",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "70",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "55",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "30",
                        },
                    ]
                }, {
                    id: 10,
                    fullName: "საქართველოს უნივერსიტეტი",
                    keyName: 'ug',
                    webpage: "www.ug.edu.ge",
                    ratings: [
                        {
                            name: "სწავლების დონე",
                            ratingPercent: "60",
                        },
                        {
                            name: "ინფრასტრუქტურა",
                            ratingPercent: "70",
                        },
                        {
                            name: "ხელმისაწვდომობა",
                            ratingPercent: "45",
                        }, {
                            name: "დასაქმება",
                            ratingPercent: "35",
                        },
                    ]
                },
            ];
            // return promise (because in future we need $get $post result promises)
            return $q.resolve(dataArray);
        }
    };
});



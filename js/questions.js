var surveyData = {
   pages: [
      {
         name:"observation",
         questions:[
            {
               type:"radiogroup",
               name:"on_observation",
               title:"(Volunteer quesion) Is this survey completed on observation?",
               choices:[
                  "yes",
                  "no"
               ]
            }
         ]
      },
      {
         name:"qualification",
         questions:[
            {
               type:"radiogroup",
               name:"completed_survey",
               title:"Have you completed this survey earlier today?",
               choices:[
                  "yes",
                  "no"
               ]
            },
            {
               type:"radiogroup",
               name:"currently_homeless",
               title:"Are you currently homeless?",
               choices:[
                  "yes",
                  "no"
               ]
            },
            {
               type:"radiogroup",
               name:"where_stay_last",
               title:"Where did you stay last night?",
               choices:[
                  {
                     value:"notFit",
                     text:"Place not meant for habitation (car, street, abandoned building, etc.)"
                  },
                  {
                     value:"hotel",
                     text:"Hotel/Motel paname for by an agency or organization"
                  },
                  {
                     value:"psychiatric",
                     text:"Psychiatric facility"
                  },
                  {
                     value:"substanceAbuse",
                     text:"Substance abuse treatment facility"
                  },
                  {
                     value:"hospital",
                     text:"Hospital"
                  },
                  {
                     value:"jail",
                     text:"Jail, prison, detention facility"
                  },
                  {
                     value:"transitionalHousing",
                     text:"Transitional Housing"
                  },
                  {
                     value:"emergencyShelter",
                     text:"Emergency shelter"
                  }
               ]
            }
         ]
      },
      {
         name:"generalquestions",
         questions:[
            {
               type:"text",
               name:"first_name",
               title:"Please tell me your first name:"
            },
            {
               type:"text",
               name:"last_name",
               title:"Please tell me the first 3 letters of your last name:"
            },
            {
               type:"text",
               name:"ssn",
               title:"Last 4 of your SSN:"
            },
            {
               type:"text",
               name:"dob",
               title:"What is your date of birth?"
            },
            {
               type:"text",
               name:"age",
               title:"What is your age?"
            },
            {
               type:"radiogroup",
               name:"gender",
               title:"Are you:",
               choices:[
                  {
                     value:"male",
                     text:"Male"
                  },
                  {
                     value:"female",
                     text:"Female"
                  },
                  {
                     value:"mtf",
                     text:"Transgender M to F"
                  },
                  {
                     value:"ftm",
                     text:"Transgender F to M"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"hispanic",
               title:"Are you Hispanic or Latino?",
               choices:[
                  {
                     value:"yes",
                     text:"yes"
                  },
                  {
                     value:"no",
                     text:"no"
                  }
               ]
            },
            {
               type:"checkbox",
               name:"race",
               title:"What is your race?",
               choices:[
                  {
                     value:"americanIndian",
                     text:"American Indian/Alaskan Native"
                  },
                  {
                     value:"asian",
                     text:"Asian"
                  },
                  {
                     value:"black",
                     text:"Black/African American"
                  },
                  {
                     value:"native",
                     text:"Native Hawaiian/Other Pacific Islander"
                  },
                  {
                     value:"white",
                     text:"White"
                  },
                  {
                     value:"other",
                     text:"Other"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"homelessness_duration",
               title:"How long have you been in this episode of homelessness?",
               choices:[
                  {
                     value:"oneWeek",
                     text:"1 week or less"
                  },
                  {
                     value:"weekToMonth",
                     text:"more than 1 week, but less than 1 month"
                  },
                  {
                     value:"oneToThreeMonths",
                     text:"1 - 3 months"
                  },
                  {
                     value:"threeMonthsToYear",
                     text:"more than 3 months, but less than 1 year"
                  },
                  {
                     value:"yearOrMore",
                     text:"1 year or longer"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"shelter_frequency",
               title:"How many times have you been on the streets, Emergency Shelter, or Safe Haven in the past three years including today?",
               choices:[
                  {
                     value:"never",
                     text:"Never in the 3 years"
                  },
                  {
                     value:"one",
                     text:"One Time"
                  },
                  {
                     value:"two",
                     text:"Two Times"
                  },
                  {
                     value:"three",
                     text:"Three Times"
                  },
                  {
                     value:"fourOrMore",
                     text:"Four or More Times"
                  }
               ]
            },
            {
               type:"text",
               name:"shelter_months",
               title:"Total number of months you have been homeless on the street, Emergency Shelter, or Safe Haven in the past three years?"
            },
            {
               type:"radiogroup",
               name:"county_duration",
               title:"How long have you been staying in Hillsborough County?",
               choices:[
                  {
                     value:"oneWeekOrLess",
                     text:"1 week or less"
                  },
                  {
                     value:"weekToMonth",
                     text:"More than 1 week, but less than 1 month"
                  },
                  {
                     value:"oneToThreeMonths",
                     text:"1 to 3 months"
                  },
                  {
                     value:"moreThanThreeMonthsLessThanYear",
                     text:"More than 3 months, but less than 1 year"
                  },
                  {
                     value:"yearOrMore",
                     text:"1 year or longer"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"homelessness_cause",
               title:"What is the primary cause of your homelessness?",
               choices:[
                  {
                     value:"finance",
                     text:"Employment/financial reasons"
                  },
                  {
                     value:"family",
                     text:"Family problems"
                  },
                  {
                     value:"immigration",
                     text:"Recent immigration"
                  },
                  {
                     value:"housing",
                     text:"Housing issues"
                  },
                  {
                     value:"disaster",
                     text:"Natural/other disasters"
                  },
                  {
                     value:"medical",
                     text:"Medical/disability problems"
                  },
                  {
                     value:"other",
                     text:"Other"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"foster_status",
               title:"Were you ever in foster care as a child?",
               choices:[
                  {
                     value:"yes",
                     text:"yes"
                  },
                  {
                     value:"no",
                     text:"no"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"disability_status",
               title:"Do you have a disabling condition?",
               choices:[
                  {
                     value:"yes",
                     text:"yes"
                  },
                  {
                     value:"no",
                     text:"no"
                  }
               ]
            },
            {
               type:"checkbox",
               name:"disability_type",
               title:"What type of disabling condition do you have (you may select more than one condition)?",
               choices:[
                  {
                     value:"physical",
                     text:"Physical"
                  },
                  {
                     value:"developmental",
                     text:"Developmental"
                  },
                  {
                     value:"mental",
                     text:"Mental health"
                  },
                  {
                     value:"alcohol",
                     text:"Alcohol Abuse"
                  },
                  {
                     value:"drug",
                     text:"Drug Abuse"
                  },
                  {
                     value:"hiv",
                     text:"HIV/AnameS"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"veteran_status",
               title:"Have you ever served on Active Duty in the US Military? (If \"No\", skip next question)",
               choices:[
                  {
                     value:"yes",
                     text:"yes"
                  },
                  {
                     value:"no",
                     text:"no"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"military_branch",
               title:"What Branch of the Military do you serve?",
               choices:[
                  {
                     value:"army",
                     text:"Army"
                  },
                  {
                     value:"airForce",
                     text:"Air Force"
                  },
                  {
                     value:"navy",
                     text:"Navy"
                  },
                  {
                     value:"marines",
                     text:"Marines"
                  },
                  {
                     value:"coastGuard",
                     text:"Coast Guard"
                  }
               ]
            },
            {
               type:"text",
               name:"military_enter_date",
               title:"What date did you enter the service? (Month/Year)"
            },
            {
               type:"text",
               name:"military_exit_date",
               title:"What date did you exit the service? (Month/Year)"
            },
            {
               type:"radiogroup",
               name:"discharge_type",
               title:"What type of discharge did you receive?",
               choices:[
                  {
                     value:"honorable",
                     text:"Honorable"
                  },
                  {
                     value:"dishonorable",
                     text:"Dishonorable"
                  },
                  {
                     value:"general",
                     text:"General"
                  },
                  {
                     value:"otherThanHonorable",
                     text:"Other than honorable"
                  },
                  {
                     value:"badConduct",
                     text:"Bad conduct"
                  },
                  {
                     value:"other",
                     text:"Other"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"health_insurance_status",
               title:"Are you covered by Health Insurance?",
               choices:[
                  {
                     value:"yes",
                     text:"yes"
                  },
                  {
                     value:"no",
                     text:"no"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"domestic_violence_status",
               title:"Are you a domestic violence victim/survivor?",
               choices:[
                  {
                     value:"yes",
                     text:"yes"
                  },
                  {
                     value:"no",
                     text:"no"
                  }
               ]
            },
            {
               type:"radiogroup",
               name:"felony_status",
               title:"Have you ever been charged with a felony?",
               choices:[
                  "Yes",
                  "No"
               ]
            },
            {
               type:"checkbox",
               name:"income_type",
               title:"Do you receive any income?",
               choices:[
                  "Yes  (If yes)",
                  "No Income",
                  "Earned income",
                  "Alimony",
                  "SSA retirement",
                  "VA Disability Pension (NON-service connected)",
                  "VA Disability Comp (Service Connected)",
                  "SSI",
                  "Workers' Comp",
                  "Pension/Retirement Income",
                  "TANF",
                  "SSDI",
                  "Private disability insurance",
                  "Unemployment",
                  "Child support",
                  "Amount $ /month (Gross)",
                  "Other source"
               ]
            },
            {
               type:"text",
               name:"homeless_adults",
               title:"How many other Adult family members are homeless with you now?"
            },
            {
               type:"text",
               name:"homeless_children",
               title:"How many other Children family members are homeless with you now?"
            },
            {
            	type:"text",
            	name:"surveyor_name",
            	title:"Person Completing Survey:"
            },
            {
            	type:"text",
            	name:"deployment_site",
            	title:"Deployment Site:"
            },
            {
     			type: "comment",
     			name: "notes",
     			title:"NOTES:"
    		}
         ]
      }
   ]
}

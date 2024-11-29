import React, { useRef } from 'react'

function FormsTenth() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let englishInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let englishResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();

    let resultLabelref = useRef();

    let CalculateResult=()=>{
                let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let englishMarks=Number(englishInputRef.current.value);
                let teluguMarks=Number(teluguInputRef.current.value);
                let hindiMarks=Number(hindiInputRef.current.value);
                let mathsMarks=Number(mathsInputRef.current.value);
                let scienceMarks=Number(scienceInputRef.current.value);
                let socialMarks=Number(socialInputRef.current.value);
                let result

                if(englishMarks <35 || teluguMarks<35 || hindiMarks<35 || mathsMarks<35 || scienceMarks<35 || socialMarks<35){
                    result="Failed"
                }
                else{
                    result="Passed"
                }

                let totalMarks=englishMarks+teluguMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
                resultLabelref.current.innerHTML=`${firstName} ${lastName} ${result} in tenth got total marks are ${totalMarks}`

                alert(`Total Marks are ${totalMarks}`);

        console.log("Calculate the result");
    };

    let firstNameonFocus=()=>{
        firstNameInputRef.current.style.backgroundColor="gray";
    }

    let firstNameonBlur=()=>{
        firstNameInputRef.current.style.backgroundColor="white";
    }

    let lastNameonFocus=()=>{
        lastNameInputRef.current.style.backgroundColor="gray";
    }

    let lastNameonBlur=()=>{
        lastNameInputRef.current.style.backgroundColor="white";   
    }

    let inputonFocus=(inputRef)=>{
        inputRef.current.style.backgroundColor="orange";

    }

    let inputonChange=(inputRef,resultRef)=>{
        if(inputRef.current.value >=0 && inputRef.current.value<=100){
            if(inputRef.current.value >=35){
                resultRef.current.innerHTML="Pass";
                resultRef.current.style.backgroundColor="green";
            }
            else{
                resultRef.current.innerHTML="Fail";
                resultRef.current.style.backgroundColor="red"
            }
        }
        else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor="yellow";
        }
    }

    let inputonBlur=(inputRef)=>{
        inputRef.current.style.backgroundColor="white";
    }


  return (
    <div>
      <h1>Functions with Parameters</h1>
      <hr></hr>
      <form>
            <fieldset>
                <legend>Please enter your Marks and Calculate</legend>
            </fieldset>
        <div>
            <label>First Name</label>
            <input type="text" ref={firstNameInputRef}
            onFocus={()=>{
            firstNameonFocus();
            }}
            onBlur={()=>{
            firstNameonBlur();
            }}></input>
            <label ref={firstNameResultRef}></label>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" ref={lastNameInputRef}
            onFocus={()=>{
            lastNameonFocus();
            }}
            onBlur={()=>{
            lastNameonBlur();
            }}></input>
            <label ref={lastNameResultRef}></label>
        </div>
        <div>
            <label>English Marks</label>
            <input type="number" ref={englishInputRef} 
            onFocus={()=>{
            inputonFocus(englishInputRef);
            }}
            onChange={()=>{
            inputonChange(englishInputRef,englishResultRef);
            }}
            onBlur={()=>{
            inputonBlur(englishInputRef);
            }}></input>
            <label ref={englishResultRef}></label>
        </div>
        <div>
            <label>Telugu Marks</label>
            <input type="number" ref={teluguInputRef}
            onFocus={()=>{
            inputonFocus(teluguInputRef);
            }}
            onChange={()=>{
            inputonChange(teluguInputRef,teluguResultRef);
            }}
            onBlur={()=>{
            inputonBlur(teluguInputRef);
            }}></input>
            <label ref={teluguResultRef}></label>
        </div>
        <div>
            <label>Hindi Marks</label>
            <input type="number" ref={hindiInputRef}
            onFocus={()=>{
            inputonFocus(hindiInputRef);
            }}
            onChange={()=>{
            inputonChange(hindiInputRef,hindiResultRef);
            }}
            onBlur={()=>{
            inputonBlur(hindiInputRef);
            }}></input>
            <label ref={hindiResultRef}></label>
        </div>
        <div>
            <label>Maths Marks</label>
            <input type="number" ref={mathsInputRef}
            onFocus={()=>{
            inputonFocus(mathsInputRef);
            }}
            onChange={()=>{
            inputonChange(mathsInputRef,mathsResultRef);
            }}
            onBlur={()=>{
            inputonBlur(mathsInputRef);
            }}></input>
            <label ref={mathsResultRef}></label>
        </div>
        <div>
            <label>Science Marks</label>
            <input type="number" ref={scienceInputRef}
            onFocus={()=>{
            inputonFocus(scienceInputRef);
            }}
            onChange={()=>{
            inputonChange(scienceInputRef,scienceResultRef);
            }}
            onBlur={()=>{
            inputonBlur(scienceInputRef);
            }}></input>
            <label ref={scienceResultRef}></label>
        </div>
        <div>
            <label>Social Marks</label>
            <input type="number" ref={socialInputRef}
            onFocus={()=>{
            inputonFocus(socialInputRef);
            }}
            onChange={()=>{
            inputonChange(socialInputRef,socialResultRef);
            }}
            onBlur={()=>{
            inputonBlur(socialInputRef);
            }}></input>
            <label ref={socialResultRef}></label>
        </div>
        <div>
            <label style={{width: "700px"}} ref={resultLabelref}>Please enter your Marks and Calculate</label>
        </div>
        <div>
            <button type="button" onClick={()=>{
                CalculateResult();
            }}>Calculate</button>
        </div>
      </form>
    </div>
  )
}

export default FormsTenth

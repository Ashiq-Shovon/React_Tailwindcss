import React, { useState } from "react";
import {
  addingConditionalProperty,
  coditionalValueAddedInArray,
  concatenateArray,
  copyAndMergeObject,
  copyArray,
  morePowerfull,
  overrideProperty,
} from "./utility";
import Pic from "../../../../img/more.PNG";

const Object = () => {
  const [get, getFunc] = useState(morePowerfull());
  const person = {
    name: ["anik", "hasan"],
    age: 30,
    school: "adamjee cantonment public school",
    ssc: 3.45,
    hsc: 4.25,
    varsity: "AIUB",
    bio() {
      return (
        <>
          <p>hi i am {this.name[0] + " " + this.name[1]}</p>
        </>
      );
    },
  };

  return (
    <>
      <div>
        <h2 className="text-2xl text-center p-3  border-b-4 border-slate-700 bottom-2">
          This is javascript object
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 m-8 text-justify text-lg tracking-wide">
        <div className="shadow-lg p-4 rounded-lg bg-slate-50">
          {person.bio()}
        </div>

        <div className="shadow-lg p-4 rounded-lg bg-slate-50">
          <h1 className="text-xl text-center mb-4">
            Difference Between Dot and Bracket Notation
          </h1>

          <div className="grid grid-cols-3">
            <div className="grid grid-rows-2 grid-flow-col p-3">
              <div className="row-span-2">object</div>
              <div className=""></div>
            </div>
            <div>
              <div className="p-3">Notation</div>
            </div>
            <div>
              <div className="p-3">Property</div>
            </div>
            {/* <div className="flex items-center p-3">Bracket</div>
            <div className="p-3 text-justify">Set both name and value of any property dynamically</div>
            <div className="flex  items-center p-3">Dot</div>
            <div className="p-3">Set only value of any property</div> */}
          </div>
          <p>
            One useful aspect of bracket notation is that it can be used to set
            not only member values dynamically, but member names too. Adding a
            property to an object using the method above isn't possible with dot
            notation
          </p>
        </div>
        <div className="shadow-lg p-4 rounded-lg bg-slate-50">
          The value of an object member can be pretty much anything — in our
          person object we've got a number, an array, and two functions. When
          the object's members are functions there's a simpler syntax. Instead
          of bio: function () we can write bio(). Like this: An object property
          can itself be an object.
        </div>

        <div className="shadow-lg p-4 rounded-lg bg-slate-50">
          An object like this is referred to as an object literal — we've
          literally written o ut the object contents as we've come to create it.
          This is different compared to objects instantiated from classes, which
          we'll look at later on.
        </div>
        <div className="shadow-lg col-span-2 rounded-lg bg-slate-50">
          <div className="text-center mb-6">
            <h1>object destructuring</h1>
            <p>Spread Operator vs Rest Parameter</p>
          </div>
          <div className="grid grid-cols-5 gap-1">
            <div className="col-span-5 p-2 shadow bg-slate-200">
              <p className="leading-loose">
                Only{" "}
                <span className="font-medium italic underline">
                  iterable values,
                </span>{" "}
                like <span className="font-medium italic underline">Array</span>{" "}
                and <span className="font-medium italic underline">String</span>{" "}
                can be{" "}
                <span className="font-medium italic underline">spread</span> in{" "}
                <span className="font-medium italic underline">
                  array literals
                </span>{" "}
                and{" "}
                <span className="font-medium italic underline">
                  argument lists.
                </span>{" "}
              </p>
              <p className="leading-loose mb-3">
                Many objects are not iterable, including all plain objects that
                lack a Symbol.iterator method:
              </p>
              <p className="leading-normal mb-2">
                On the other hand, spreading in object literals enumerates the
                own properties of the value. For typical arrays, all indices are
                enumerable own properties, so arrays can be spread into objects.
              </p>
              <p className="leading-loose mb-2">
                There are{" "}
                <span className="font-medium italic underline">
                  three distinct
                </span>{" "}
                places that accept the{" "}
                <span className="font-medium italic underline">
                  spread syntax
                </span>
                :
              </p>
            </div>

            <div className="shadow bg-slate-200">
              <p> Function argument</p>
            </div>
            <div className="col-span-4 shadow bg-slate-200">
              <div>
                <p>Replace apply()</p>
              </div>
              <div>
                <p>Apply for new operator</p>
              </div>
            </div>
            <div className="shadow bg-slate-200">array literals</div>
            <div className="col-span-4 shadow bg-slate-200">
              <div>
                <h2 className="text-center text-2xl italic font-medium">
                  A more powerful array literal
                </h2>
                <p>{morePowerfull(6, 3)}</p>
                <img src={Pic} alt="img" />
              </div>
              <div>
                <h2 className="text-center text-2xl italic font-medium">
                  Copying an array
                </h2>
                <p>{copyArray().map((ele) => ele + 1)}</p>
              </div>
              <div>
                <h2 className="text-center text-2xl italic font-medium">
                  A better way to concatenate arrays
                </h2>
                <p>{concatenateArray()}</p>
              </div>
              <div>
                <h2 className="text-center text-2xl italic font-medium">
                  Conditionally adding values to an array
                </h2>
                <p>{coditionalValueAddedInArray()}</p>
              </div>
            </div>
            <div className="shadow bg-slate-200">object literals</div>
            <div className="col-span-4 shadow bg-slate-200">
              <div>
                <p>Copying and merging objects</p>
                <p>{copyAndMergeObject().name1}</p>
              </div>
              <div>
                <p>Overriding properties</p>
                <p>{overrideProperty().age}</p>
              </div>
              <div>
                <p>Conditionally adding properties to an object</p>
                <p>{addingConditionalProperty()?.waterMelon}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-4 rounded bg-slate-50">
          <p>javascript data structure</p>
        </div>
      </div>
    </>
  );
};

export default Object;

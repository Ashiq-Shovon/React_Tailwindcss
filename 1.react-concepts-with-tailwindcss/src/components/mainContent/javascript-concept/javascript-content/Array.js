import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import createArray from "../../../../img/create-array.png";
import arrayLength from "../../../../img/array-length.png";
import accessArray from "../../../../img/access-array.png";
import { people, arrayObj, hon } from "./file";

const filter = people.filter((item) => item.id < 3);

const Array = () => {
  console.log("render");
  const [value, setValue] = React.useState(0);
  const [val, setVal] = useState(arrayObj.getValue());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {}, [val, val]);

  const handlePush = () => {
    arrayObj.pushElement("dhaka"); //["rajshahi", "norail",nator, dhaka]
    // const len = arrayObj.legthCount(); //4
    const arr = arrayObj.getValue(); //["rajshahi", "norail",nator, dhaka]
    const lastValue = arr.slice(-1)[0]//"dhaka"
    console.log(lastValue)
    setVal((pre) => {          //4          //3
      return [...pre, ...(arr.length === pre.length ? [] : [lastValue])];
    });
    // console.log(val);
  };
  const handlePop = () => {
    arrayObj.popElement(); //["rajshahi", "norail",nator]
    const arr = arrayObj.getValue(); //["rajshahi", "norail"]
    setVal(() => [...arr]);
  };

  return (
    <>
      <Box
        className="h-screen w-full z-0"
        sx={{ flexGrow: 2, bgcolor: "background.paper", display: "flex" }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Array methods" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
        <TabPanel className="flex-1 text-justify" value={value} index={0}>
          <div className="grid grid-cols-3 gap-x-1 gap-y-2">
            <div className="p-4 shadow-lg bg-slate-200 rounded-sm">
              <h2>height</h2>
              {filter.map((item, index, arr) => {
                return (
                  <div key={item.id} className="grid shadow-md rounded-md">
                    <div className="flex justify-evenly">
                      <p>{item.id}</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-4 col-span-2 shadow-lg bg-slate-200 rounded-sm">
              <div>
                <h1 className="text-xl text-center font-bold">
                  Creating Arrays
                </h1>
              </div>
              <div>
                <p className="indent-5">
                  Suppose we want to store a shopping list in an array. Paste
                  the following code into the console:
                </p>
              </div>
              <img src={createArray} alt="create-array" />
              <div>
                <p className="indent-5">
                  In the above example, each item is a string, but in an array
                  we can store various data types —
                  <span className="italic font-bold underline"> strings</span>
                  <span className="italic font-bold underline ml-4">
                    numbers
                  </span>
                  <span className="italic font-bold underline ml-4">
                    objects
                  </span>
                  <span className="italic font-bold underline ml-4">
                    even other arrays
                  </span>
                </p>
              </div>
            </div>
            <div className="p-4  shadow-lg bg-slate-200 rounded-sm">
              <div>
                <h1>Finding the length of an array</h1>
              </div>
              <div>
                <p>
                  You can find out the length of an array (how many items are in
                  it) in exactly the same way as you find out the length (in
                  characters) of a string — by using the length property. Try
                  the following:
                </p>
              </div>
              <img src={arrayLength} className="" alt="length" />
              {arrayObj.legthCount()}
            </div>
            <div className="p-4 shadow-lg bg-slate-200 rounded-sm">
              <div>
                <h1>Accessing and redifying array items</h1>
              </div>
              <div>
                <p>
                  The first item of the array is accessed by the index 0 with
                  bracket notation since array numbered
                </p>
                <img src={accessArray} className="" alt="access-array" />
                <p>{arrayObj.accessArray()}</p>
                <p>
                  You can also modify an item in an array by giving a single
                  array item a new value. Try this:
                </p>
                <p>
                  Note that an array inside an array is called a
                  multidimensional array. You can access an item inside an array
                  that is itself inside another array by chaining two sets of
                  square brackets together. For example, to access one of the
                  items inside the array that is the third item inside the
                  random array (see previous section), we could do something
                  like this:
                </p>
              </div>
            </div>
            <div className="p-4 shadow-lg bg-slate-200 rounded-sm">
              <div>
                <h1>Finding the index of items in an array</h1>
              </div>
              <div>
                <p>
                  If you don't know the index of an item, you can use the
                  indexOf() method. The indexOf() method takes an item as an
                  argument and will either return the item's index or -1 if the
                  item is not in the array:
                </p>
              </div>
            </div>
            <div className="col-span-2 p-4 shadow-lg bg-slate-200 rounded-sm">
              <h1>Adding and removing items from the end</h1>
              <div className="flex justify-between">
                <div>
                  <h1>push element</h1>
                  {/* {console.log(val)} */}
                  {val.map((item, i) => {
                    return (
                      <div key={i}>
                        <p>{i + 1 + " " + item}</p>
                      </div>
                    );
                  })}
                  <Button variant="contained" onClick={handlePush}>
                    push button
                  </Button>
                  <Button variant="contained" onClick={handlePop}>
                    pop button
                  </Button>
                </div>
                <div className="">
                  <h2>pop element</h2>
                  {val.map((item, i) => {
                    return (
                      <div key={i}>
                        <p>{i + 1 + " " + item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="p-4 shadow-lg bg-slate-200 rounded-sm">
              <h2>hello</h2>
              {arrayObj.shiftElement()}
              {arrayObj.getValue().map((item, i) => {
                return (
                  <div key={i}>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div> */}
          </div>

          <div className="w-ful  rounded-lg shadow-lg py-6 px-16">
            <h1>finding the index of item in an array</h1>
            <div className="flex justify-between">
              <div>
                <h1>push element</h1>
                {/* {arrayObj.pushElement("dhaka")} */}
                {val.map((item, i) => {
                  return (
                    <div key={i}>
                      <p>{i + 1 + " " + item}</p>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <h2>pop element</h2>

                {/* {arrayObj.popElement()} */}
                {val.map((item, i) => {
                  return (
                    <div key={i}>
                      <p>{i + 1 + " " + item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className="flex-1">
          <div className=" rounded-lg shadow-lg py-6 px-16">
            <h1>finding the index of item in an array</h1>
            <div className="flex justify-between">
              <div>
                <h1>push element</h1>
                {/* {arrayObj.pushElement("dhaka")} */}
                {val.map((item, i) => {
                  return (
                    <div key={i}>
                      <p>{i + 1 + " " + item}</p>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <h2>pop element</h2>

                {/* {arrayObj.popElement()} */}
                {val.map((item, i) => {
                  return (
                    <div key={i}>
                      <p>{i + 1 + " " + item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="bg-emerald-600 rounded-lg shadow-lg py-6 px-16">
            {/* <h2>hello</h2>
            {arrayObj.shiftElement()}
            {arrayObj.getValue().map((item, i) => {
              return (
                <div key={i}>
                  <p>{item}</p>
                </div>
              );
            })} */}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </>
  );
};

export default Array;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

import React, { useState } from 'react';
import { Play, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

const QuickSortVisualization = () => {
  const steps = [
    {
      title: "Initial Setup",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 0,
      j: 6,
      low: 0,
      high: 6,
      description: "partition(A, 0, 6)",
      comparison: "i = low = 0, j = high = 6, pivot = A[0] = 56"
    },
    {
      title: "Outer Loop: while i < j",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 0,
      j: 6,
      low: 0,
      high: 6,
      description: "Check condition: i < j?",
      comparison: "0 < 6? YES → Continue"
    },
    {
      title: "Inner Loop 1: while A[i] <= A[pivot]",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 0,
      j: 6,
      low: 0,
      high: 6,
      description: "Increment i while A[i] <= 56",
      comparison: "A[0]=56 <= 56? YES → i++"
    },
    {
      title: "After i++",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 1,
      j: 6,
      low: 0,
      high: 6,
      description: "i = 1",
      comparison: "A[1]=35 <= 56? YES → i++"
    },
    {
      title: "After i++",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 2,
      j: 6,
      low: 0,
      high: 6,
      description: "i = 2",
      comparison: "A[2]=81 <= 56? NO → Stop incrementing i"
    },
    {
      title: "Inner Loop 2: while A[j] > A[pivot]",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 2,
      j: 6,
      low: 0,
      high: 6,
      description: "Decrement j while A[j] > 56",
      comparison: "A[6]=26 > 56? NO → Stop decrementing j"
    },
    {
      title: "Check if i < j",
      array: [56, 35, 81, 11, 46, 75, 26],
      pivot: 0,
      i: 2,
      j: 6,
      low: 0,
      high: 6,
      description: "if i < j then swap",
      comparison: "2 < 6? YES → Swap A[2] and A[6]"
    },
    {
      title: "After Swap",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 2,
      j: 6,
      low: 0,
      high: 6,
      description: "Swapped A[2]=81 with A[6]=26",
      comparison: "Array: [56, 35, 26, 11, 46, 75, 81]"
    },
    {
      title: "Back to Outer Loop: while i < j",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 2,
      j: 6,
      low: 0,
      high: 6,
      description: "Check condition again",
      comparison: "2 < 6? YES → Continue"
    },
    {
      title: "Inner Loop 1: Increment i",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 2,
      j: 6,
      low: 0,
      high: 6,
      description: "while A[i] <= 56",
      comparison: "A[2]=26 <= 56? YES → i++"
    },
    {
      title: "After i++",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 3,
      j: 6,
      low: 0,
      high: 6,
      description: "i = 3",
      comparison: "A[3]=11 <= 56? YES → i++"
    },
    {
      title: "After i++",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 4,
      j: 6,
      low: 0,
      high: 6,
      description: "i = 4",
      comparison: "A[4]=46 <= 56? YES → i++"
    },
    {
      title: "After i++",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 5,
      j: 6,
      low: 0,
      high: 6,
      description: "i = 5",
      comparison: "A[5]=75 <= 56? NO → Stop"
    },
    {
      title: "Inner Loop 2: Decrement j",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 5,
      j: 6,
      low: 0,
      high: 6,
      description: "while A[j] > 56",
      comparison: "A[6]=81 > 56? YES → j--"
    },
    {
      title: "After j--",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 5,
      j: 5,
      low: 0,
      high: 6,
      description: "j = 5",
      comparison: "A[5]=75 > 56? YES → j--"
    },
    {
      title: "After j--",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 5,
      j: 4,
      low: 0,
      high: 6,
      description: "j = 4",
      comparison: "A[4]=46 > 56? NO → Stop"
    },
    {
      title: "Check if i < j",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 5,
      j: 4,
      low: 0,
      high: 6,
      description: "if i < j then swap",
      comparison: "5 < 4? NO → Don't swap"
    },
    {
      title: "Outer Loop Ends: i >= j",
      array: [56, 35, 26, 11, 46, 75, 81],
      pivot: 0,
      i: 5,
      j: 4,
      low: 0,
      high: 6,
      description: "Exit outer loop",
      comparison: "i >= j, so exit while loop"
    },
    {
      title: "Final Swap: A[j] and A[pivot]",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 4,
      i: 5,
      j: 4,
      low: 0,
      high: 6,
      description: "Swap A[j] and A[pivot]",
      comparison: "Swap A[4]=46 with A[0]=56 → Return j = 4",
      sorted: [4]
    },
    {
      title: "Partition Result",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: -1,
      i: -1,
      j: 4,
      low: 0,
      high: 6,
      description: "First partition complete!",
      comparison: "[46, 35, 26, 11] | 56 | [75, 81] → j = 4",
      sorted: [4]
    },
    {
      title: "Left: QuickSort(A, 0, 3)",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 0,
      j: 3,
      low: 0,
      high: 3,
      description: "Sort left subarray [46, 35, 26, 11]",
      comparison: "i=low=0, j=high=3, pivot=A[0]=46",
      sorted: [4]
    },
    {
      title: "Left: Increment i",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 1,
      j: 3,
      low: 0,
      high: 3,
      description: "while A[i] <= 46",
      comparison: "A[0]=46<=46? YES i++, A[1]=35<=46? YES i++",
      sorted: [4]
    },
    {
      title: "Left: Continue i++",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 2,
      j: 3,
      low: 0,
      high: 3,
      description: "i = 2",
      comparison: "A[2]=26<=46? YES i++",
      sorted: [4]
    },
    {
      title: "Left: Continue i++",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 3,
      j: 3,
      low: 0,
      high: 3,
      description: "i = 3",
      comparison: "A[3]=11<=46? YES i++",
      sorted: [4]
    },
    {
      title: "Left: i exceeded bounds",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 4,
      j: 3,
      low: 0,
      high: 3,
      description: "i = 4 (out of range)",
      comparison: "All elements <= pivot",
      sorted: [4]
    },
    {
      title: "Left: Decrement j",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 4,
      j: 3,
      low: 0,
      high: 3,
      description: "while A[j] > 46",
      comparison: "A[3]=11>46? NO, Stop at j=3",
      sorted: [4]
    },
    {
      title: "Left: i >= j, Exit loop",
      array: [46, 35, 26, 11, 56, 75, 81],
      pivot: 0,
      i: 4,
      j: 3,
      low: 0,
      high: 3,
      description: "Exit loop: i >= j",
      comparison: "4 >= 3, exit while loop",
      sorted: [4]
    },
    {
      title: "Left: Swap A[j] and A[pivot]",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 3,
      i: -1,
      j: 3,
      low: 0,
      high: 3,
      description: "Final swap",
      comparison: "Swap A[3]=11 with A[0]=46 → j=3",
      sorted: [3, 4]
    },
    {
      title: "Left Result: j=3",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: -1,
      i: -1,
      j: 3,
      low: 0,
      high: 3,
      description: "Partition complete, return j=3",
      comparison: "[11, 35, 26] | 46 | []",
      sorted: [3, 4]
    },
    {
      title: "Subarray: QuickSort(A, 0, 2)",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 0,
      j: 2,
      low: 0,
      high: 2,
      description: "Sort [11, 35, 26]",
      comparison: "i=0, j=2, pivot=A[0]=11, while i<j",
      sorted: [3, 4]
    },
    {
      title: "Increment i: while A[i]<=A[pivot]",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 0,
      j: 2,
      low: 0,
      high: 2,
      description: "Inner loop 1: increment i",
      comparison: "A[0]=11<=11? YES → i++",
      sorted: [3, 4]
    },
    {
      title: "After i++",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 1,
      j: 2,
      low: 0,
      high: 2,
      description: "i = 1",
      comparison: "A[1]=35<=11? NO → Stop incrementing i",
      sorted: [3, 4]
    },
    {
      title: "Decrement j: while A[j]>A[pivot]",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 1,
      j: 2,
      low: 0,
      high: 2,
      description: "Inner loop 2: decrement j",
      comparison: "A[2]=26>11? YES → j--",
      sorted: [3, 4]
    },
    {
      title: "After j--",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 1,
      j: 1,
      low: 0,
      high: 2,
      description: "j = 1",
      comparison: "A[1]=35>11? YES → j--",
      sorted: [3, 4]
    },
    {
      title: "After j--",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 1,
      j: 0,
      low: 0,
      high: 2,
      description: "j = 0",
      comparison: "A[0]=11>11? NO → Stop decrementing j",
      sorted: [3, 4]
    },
    {
      title: "Check if i<j",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: 1,
      j: 0,
      low: 0,
      high: 2,
      description: "if i<j then swap",
      comparison: "1<0? NO → Don't swap, exit loop",
      sorted: [3, 4]
    },
    {
      title: "Final Swap: A[j] and A[pivot]",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 0,
      i: -1,
      j: 0,
      low: 0,
      high: 2,
      description: "Swap A[0] with A[0]",
      comparison: "Swap A[0]=11 with A[0]=11, return j=0",
      sorted: [0, 3, 4]
    },
    {
      title: "Subarray: QuickSort(A, 1, 2)",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 1,
      j: 2,
      low: 1,
      high: 2,
      description: "Sort [35, 26]",
      comparison: "i=1, j=2, pivot=A[1]=35, while i<j",
      sorted: [0, 3, 4]
    },
    {
      title: "Increment i: while A[i]<=A[pivot]",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 1,
      j: 2,
      low: 1,
      high: 2,
      description: "Inner loop 1",
      comparison: "A[1]=35<=35? YES → i++",
      sorted: [0, 3, 4]
    },
    {
      title: "After i++",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 2,
      j: 2,
      low: 1,
      high: 2,
      description: "i = 2",
      comparison: "A[2]=26<=35? YES → i++",
      sorted: [0, 3, 4]
    },
    {
      title: "i goes beyond bounds",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 3,
      j: 2,
      low: 1,
      high: 2,
      description: "i = 3 (out of range)",
      comparison: "i exceeded, stop inner loop 1",
      sorted: [0, 3, 4]
    },
    {
      title: "Decrement j: while A[j]>A[pivot]",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 3,
      j: 2,
      low: 1,
      high: 2,
      description: "Inner loop 2",
      comparison: "A[2]=26>35? NO → Stop decrementing j",
      sorted: [0, 3, 4]
    },
    {
      title: "Check if i<j",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 3,
      j: 2,
      low: 1,
      high: 2,
      description: "if i<j then swap",
      comparison: "3<2? NO → Don't swap",
      sorted: [0, 3, 4]
    },
    {
      title: "Outer loop: while i<j",
      array: [11, 35, 26, 46, 56, 75, 81],
      pivot: 1,
      i: 3,
      j: 2,
      low: 1,
      high: 2,
      description: "Check outer loop condition",
      comparison: "3<2? NO → Exit outer loop",
      sorted: [0, 3, 4]
    },
    {
      title: "Final Swap: A[j] and A[pivot]",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 2,
      i: -1,
      j: 2,
      low: 1,
      high: 2,
      description: "Swap A[2] and A[1]",
      comparison: "Swap A[2]=26 with A[1]=35, return j=2",
      sorted: [0, 2, 3, 4]
    },
    {
      title: "Left Side Complete",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: -1,
      i: -1,
      j: -1,
      low: 0,
      high: 4,
      description: "All elements <= 56 are sorted",
      comparison: "[11, 26, 35, 46, 56] sorted!",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "Right: QuickSort(A, 5, 6)",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 5,
      j: 6,
      low: 5,
      high: 6,
      description: "Sort right subarray [75, 81]",
      comparison: "i=5, j=6, pivot=A[5]=75, while i<j",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "Increment i: while A[i]<=A[pivot]",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 5,
      j: 6,
      low: 5,
      high: 6,
      description: "Inner loop 1",
      comparison: "A[5]=75<=75? YES → i++",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "After i++",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 6,
      j: 6,
      low: 5,
      high: 6,
      description: "i = 6",
      comparison: "A[6]=81<=75? NO → Stop incrementing i",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "Decrement j: while A[j]>A[pivot]",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 6,
      j: 6,
      low: 5,
      high: 6,
      description: "Inner loop 2",
      comparison: "A[6]=81>75? YES → j--",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "After j--",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 6,
      j: 5,
      low: 5,
      high: 6,
      description: "j = 5",
      comparison: "A[5]=75>75? NO → Stop decrementing j",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "Check if i<j",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 6,
      j: 5,
      low: 5,
      high: 6,
      description: "if i<j then swap",
      comparison: "6<5? NO → Don't swap",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "Outer loop: while i<j",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: 6,
      j: 5,
      low: 5,
      high: 6,
      description: "Check outer loop condition",
      comparison: "6<5? NO → Exit outer loop",
      sorted: [0, 1, 2, 3, 4]
    },
    {
      title: "Final Swap: A[j] and A[pivot]",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 5,
      i: -1,
      j: 5,
      low: 5,
      high: 6,
      description: "Swap A[5] with A[5]",
      comparison: "Swap A[5]=75 with A[5]=75, return j=5",
      sorted: [0, 1, 2, 3, 4, 5]
    },
    {
      title: "Right partition result",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: -1,
      i: -1,
      j: 5,
      low: 5,
      high: 6,
      description: "Partition complete, j=5",
      comparison: "[] | 75 | [81]",
      sorted: [0, 1, 2, 3, 4, 5]
    },
    {
      title: "Right: QuickSort(A, 6, 6)",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: 6,
      i: 6,
      j: 6,
      low: 6,
      high: 6,
      description: "Sort [81]",
      comparison: "Single element, already sorted!",
      sorted: [0, 1, 2, 3, 4, 5, 6]
    },
    {
      title: "✓ COMPLETELY SORTED!",
      array: [11, 26, 35, 46, 56, 75, 81],
      pivot: -1,
      i: -1,
      j: -1,
      low: 0,
      high: 6,
      description: "Quick Sort Complete!",
      comparison: "Final sorted array: [11, 26, 35, 46, 56, 75, 81]",
      sorted: [0, 1, 2, 3, 4, 5, 6]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const playAnimation = () => {
    if (currentStep === steps.length - 1) {
      reset();
    }
    setIsPlaying(true);
  };

  React.useEffect(() => {
    let timer;
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1500);
    } else if (currentStep === steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-2">
          Quick Sort - Hoare Partition Scheme
        </h1>
        <p className="text-center text-slate-600 mb-8">Input: [56, 35, 81, 11, 46, 75, 26]</p>
        
        {/* Main Visualization Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center border-b-2 border-blue-500 pb-3">
            {step.title}
          </h2>
          
          {/* Array Display */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-1 mb-6">
              {step.array.map((value, index) => {
                let bgColor = "bg-slate-100";
                let textColor = "text-slate-800";
                let borderColor = "border-slate-300";
                let labels = [];
                
                // Determine background and labels
                if (step.sorted && step.sorted.includes(index)) {
                  bgColor = "bg-green-100";
                  borderColor = "border-green-500";
                  textColor = "text-green-800";
                } else if (index >= step.low && index <= step.high) {
                  bgColor = "bg-blue-50";
                  borderColor = "border-blue-300";
                }
                
                // Add labels inside the box
                if (index === step.pivot && step.pivot >= 0) {
                  labels.push({ text: "pivot", color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-500" });
                }
                if (index === step.i && step.i >= 0) {
                  labels.push({ text: "i", color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-500" });
                }
                if (index === step.j && step.j >= 0) {
                  labels.push({ text: "j", color: "text-red-600", bg: "bg-red-100", border: "border-red-500" });
                }
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`${bgColor} ${borderColor} border-4 rounded-lg w-20 h-24 flex flex-col items-center justify-center font-bold transition-all duration-500 shadow-lg relative`}
                    >
                      {/* Labels at top of box */}
                      {labels.length > 0 && (
                        <div className="absolute -top-3 flex flex-col space-y-0.5">
                          {labels.map((label, idx) => (
                            <span key={idx} className={`${label.color} ${label.bg} text-xs font-bold px-2 py-0.5 rounded border-2 ${label.border}`}>
                              {label.text}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Array value */}
                      <span className={`text-3xl ${textColor}`}>{value}</span>
                      
                      {/* Index at bottom */}
                      <span className="text-xs text-slate-500 mt-2 font-mono">[{index}]</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-4 border-l-4 border-blue-500">
            <p className="text-slate-800 font-semibold text-lg mb-2">{step.description}</p>
            <p className="text-slate-700 text-base">{step.comparison}</p>
          </div>

          {/* Current Values Display */}
          <div className="grid grid-cols-3 gap-4 bg-slate-50 rounded-lg p-4">
            <div className="text-center">
              <div className="text-sm text-slate-600 mb-1">Pivot</div>
              <div className="text-2xl font-bold text-purple-600">
                {step.pivot >= 0 ? `[${step.pivot}] = ${step.array[step.pivot]}` : "-"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-600 mb-1">Index i</div>
              <div className="text-2xl font-bold text-yellow-600">
                {step.i >= 0 ? `[${step.i}] = ${step.array[step.i]}` : "-"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-600 mb-1">Index j</div>
              <div className="text-2xl font-bold text-red-600">
                {step.j >= 0 ? `[${step.j}] = ${step.array[step.j]}` : "-"}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="p-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={playAnimation}
              disabled={isPlaying}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all flex items-center space-x-2 font-semibold"
            >
              <Play size={20} />
              <span>{currentStep === steps.length - 1 ? 'Replay' : 'Play'}</span>
            </button>
            
            <button
              onClick={reset}
              className="p-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-all"
            >
              <RotateCcw size={24} />
            </button>
            
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className="p-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-slate-600 font-medium">
              Step {currentStep + 1} of {steps.length}
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Algorithm & Legend */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Algorithm partition(A, low, high)</h3>
            <div className="text-sm text-slate-700 font-mono bg-slate-50 p-4 rounded space-y-1">
              <div>i=low, j=high, pivot=low</div>
              <div>while i &lt; j do</div>
              <div className="ml-4">while A[i]&lt;=A[pivot] do</div>
              <div className="ml-8">i++;</div>
              <div className="ml-4">while(A[j]&gt;A[pivot])</div>
              <div className="ml-8">j--;</div>
              <div className="ml-4">if i&lt;j then</div>
              <div className="ml-8">Swap A[i] and A[j]</div>
              <div>Swap A[j] and A[pivot]</div>
              <div>return j</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Legend</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-purple-100 border-2 border-purple-500 rounded">
                  <span className="text-purple-600 font-bold text-sm">pivot</span>
                </div>
                <span className="text-sm font-medium">Pivot (first element)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-yellow-100 border-2 border-yellow-500 rounded">
                  <span className="text-yellow-600 font-bold text-sm">i</span>
                </div>
                <span className="text-sm font-medium">Left pointer (starts at low)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-red-100 border-2 border-red-500 rounded">
                  <span className="text-red-600 font-bold text-sm">j</span>
                </div>
                <span className="text-sm font-medium">Right pointer (starts at high)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-8 bg-green-100 border-4 border-green-500 rounded"></div>
                <span className="text-sm font-medium">Sorted position</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSortVisualization;

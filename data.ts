import * as types from "./types";

const firstProject: types.HistoryProjects = {
    listProject: [
        {
            title: "Первый проект",
            slide: [
                {
                    id: 1,
                    background: {
                        color: "#FFFFF",
                        imageSource: ""
                    },
                    slideElement: [],
                    selectElement: [],
                }            
            ],
            selectedSlide: [
                {
                    id: 1,
                }
            ],
        }
    ]
}

const secondProject: types.HistoryProjects = {
    listProject: [
        {
            title: "Первый проект",
            slide: [
                {
                    id: 1,
                    background: {
                        color: "#FFFFF",
                        imageSource: ""
                    },
                    slideElement: [
                        {
                            id: 1,
                            layer: 1,
                            typeElement: {
                                imgSource: "",
                                position: {
                                    x: 5,
                                    y: 5
                                },
                                size: {
                                    width: 100,
                                    height: 100,
                                }
                            }
                        },
                        {
                            id: 2,
                            layer: 1,
                            typeElement: {
                                str: "строка",
                                font: "Arial",
                                fontSize: 20,
                                leftPoint: {
                                    x: 60,
                                    y: 60
                                },
                                rightPoint: {
                                    x: 70,
                                    y: 70
                                } 
                            }
                        }
                    ],
                    selectElement: [
                        
                    ]
                }            
            ],
            selectedSlide: [
                {
                    id: 1,
                }
            ],
        }
    ]   
}

const thirdProject: types.HistoryProjects = {
    listProject: [
        {
            title: "Первый проект",
            slide: [
                {
                    id: 1,
                    background: {
                        color: "#F32F2",
                        imageSource: ""
                    },
                    slideElement: [
                        {
                            id: 1,
                            layer: 1,
                            typeElement: {
                                imgSource: "",
                                position: {
                                    x: 50,
                                    y: 50
                                },
                                size: {
                                    width: 50,
                                    height: 50
                                }
                            }
                        },
                        {
                            id: 2,
                            layer: 1,
                            typeElement: {
                                form: {
                                    firstAngle: {
                                        x: 20,
                                        y: 20
                                    },
                                    secondAngle: {
                                        x: 25,
                                        y: 25
                                    },
                                    thirdAngle: {
                                        x: 30,
                                        y: 30
                                    }
                                },
                                color: "#FFFFF",
                                borderColor: "#00000"
                            }
                        },
                        {
                            id: 3,
                            layer: 2,
                            typeElement: {
                                form: {
                                    leftPoint: {
                                        x: 70,
                                        y: 70
                                    },
                                    rightPoint: {
                                        x: 80,
                                        y: 80
                                    }
                                },
                                color: "#FFFFCC",
                                borderColor: "#FFFFFF"
                            }
                        },
                        {
                            id: 4,
                            layer: 2,
                            typeElement: {
                                form: {
                                    radius: 50,
                                    center: {
                                        x: 90,
                                        y: 90
                                    }
                                },
                                color: "#003300",
                                borderColor: "#11111",
                            }
                        },
                        {
                            id: 5,
                            layer: 3,
                            typeElement: {
                                str: "dfsnfjsd",
                                font: "Arial",
                                fontSize: 20,
                                leftPoint: {
                                    x: 100,
                                    y: 100
                                },
                                rightPoint: {
                                    x: 110,
                                    y: 110
                                }
                            }
                        }
                    ],
                    selectElement: [

                    ]
                }
            ],
            selectedSlide:[
                {
                    id: 1
                }
            ]
        }
    ]
}
export {
    firstProject, secondProject, thirdProject,
}
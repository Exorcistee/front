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
                                width: 50,
                                height: 50
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
                                width: 100,
                                height: 100
                            }
                        },
                        {
                            id: 2,
                            layer: 1,
                            typeElement: {
                                form: {
                                    first_angle: {
                                        x: 20,
                                        y: 20
                                    },
                                    second_angle: {
                                        x: 25,
                                        y: 25
                                    },
                                    third_angle: {
                                        x: 30,
                                        y: 30
                                    }
                                },
                                color: "#FFFFF",
                                border_color: "#00000"
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
                                border_color: "#FFFFFF"
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
                                border_color: "#003300"
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
import { HistoryProjects } from './types'

export const projectExample: HistoryProjects = {
  listProject: [
    {
      selectedSlide:[
        { id: 1 },
      ],
      slide: [
        {
          background: {
            color: '#F32F2',
            imageSource: '',
          },
          id: 1,
          selectElement: [],
          slideElement: [
            {
              id: 1,
              layer: 1,
              typeElement: {
                imgSource: '',
                position: {
                  x: 50,
                  y: 50,
                },
                size: {
                  height: 50,
                  width: 50,
                },
              },
            },
            {
              id: 2,
              layer: 1,
              typeElement: {
                borderColor: '#00000',
                color: '#FFFFF',
                form: {
                  firstAngle: {
                    x: 20,
                    y: 20,
                  },
                  secondAngle: {
                    x: 25,
                    y: 25,
                  },
                  thirdAngle: {
                    x: 30,
                    y: 30,
                  },
                },
              },
            },
            {
              id: 3,
              layer: 2,
              typeElement: {
                borderColor: '#FFFFFF',
                color: '#FFFFCC',
                form: {
                  leftPoint: {
                    x: 70,
                    y: 70,
                  },
                  rightPoint: {
                    x: 80,
                    y: 80,
                  },
                },
              },
            },
            {
              id: 4,
              layer: 2,
              typeElement: {
                borderColor: '#11111',
                color: '#003300',
                form: {
                  center: {
                    x: 90,
                    y: 90,
                  },
                  radius: 50,
                },
              },
            },
            {
              id: 5,
              layer: 3,
              typeElement: {
                font: 'Arial',
                fontSize: 20,
                leftPoint: {
                  x: 100,
                  y: 100,
                },
                rightPoint: {
                  x: 110,
                  y: 110,
                },
                str: 'random string',
              },
            },
          ],
        },
      ],
      title: 'Первый проект',
    },
  ],
}

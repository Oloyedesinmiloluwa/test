const apiData = [
  {
    "folder": "The bookmarks",
    "bookmarks": [
      {
        "title": "Google",
        "url": "https://www.google.com"
      },
      {
        "folder": "Wikipedia",
        "bookmarks": [
          {
            "title": "Wikipedia English Home",
            "url": "https://en.wikipedia.org/",
            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVQ4ja2TUZFDIQxFQUUkREQURAoSMIADLGAgNjCAgcjg7scW5tFuu9PtZoaPADkhNySEm8058c4KV3s3+ID8NXhDPgb03iEiCCGg1oo5J1R1++4OEYGIwN3RWgMRQVUxxvh+gbsjxggzw/KZ+QC6+84qIo8lqOpxsDKZGUopx/4CH4DeO0II6L3vQ2YGMx81q+pzEVX1uJBSAhHhmiTn/BxgZogxYoyxgUSE1toGXrX4sY3MjJwzzAy1VpRSwMxwd6SUfv8HrTXEGHcpq0Micujz8iMR0aF0SulBvJeApcF13df+L/Pw0USuuC9zNVPvSNmuzAAAAABJRU5ErkJggg=="
          },
          {
            "title": "---"
          },
          {
            "title": "Wiki Buthan",
            "url": "https://en.wikipedia.org/wiki/Bhutan",
            "tags": ["country", "asia"]
          },
          {
            "title": "Nepal",
            "url": "https://en.wikipedia.org/wiki/Nepal",
            "description": "A country in the Himalayas"
          }
        ]
      },
      {
        "title": "Youtube",
        "url": "https://www.youtube.com"
      }
    ]
  },
  {
    "folder": "test bookmarks2",
    "bookmarks": [
      {
        "title": "Google",
        "url": "https://www.google.com"
      },
      {
        "folder": "Wikipedia",
        "bookmarks": [
          {
            "title": "Wikipedia English Home",
            "url": "https://en.wikipedia.org/",
            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7klEQVQ4ja2TUZFDIQxFQUUkREQURAoSMIADLGAgNjCAgcjg7scW5tFuu9PtZoaPADkhNySEm8058c4KV3s3+ID8NXhDPgb03iEiCCGg1oo5J1R1++4OEYGIwN3RWgMRQVUxxvh+gbsjxggzw/KZ+QC6+84qIo8lqOpxsDKZGUopx/4CH4DeO0II6L3vQ2YGMx81q+pzEVX1uJBSAhHhmiTn/BxgZogxYoyxgUSE1toGXrX4sY3MjJwzzAy1VpRSwMxwd6SUfv8HrTXEGHcpq0Micujz8iMR0aF0SulBvJeApcF13df+L/Pw0USuuC9zNVPvSNmuzAAAAABJRU5ErkJggg=="
          },
          {
            "title": "---"
          },
          {
            "title": "Wiki Buthan",
            "url": "https://en.wikipedia.org/wiki/Bhutan",
            "tags": ["country", "asia"]
          },
          {
            "title": "Nepal",
            "url": "https://en.wikipedia.org/wiki/Nepal",
            "description": "A country in the Himalayas"
          }
        ]
      },
      {
        "title": "Youtube",
        "url": "https://www.youtube.com"
      }
    ]
  }
];

(function () {
    'use strict'
    $(document).ready(function () {
      $.get(
        'https://raw.githubusercontent.com/OdinTech3/yambook/testbranch/bookmark2.yaml'
      ).done(function (data) {
        console.log('File load complete')
        const res = jsyaml.load(data)
        console.log(res)

        window.onload = (e) => {
          let body = document.getElementById('body');

          const generateHtml = (item) => {
            if (item.title) return item.title;

            if (item.folder) {
              let output = `<details><summary>${item.folder}</summary>`;
              output += item.bookmarks
                .map((item) => {
                  return `<ul><li>${generateHtml(item)}</li></ul>`;
                })
                .join("\n");

              output += "</details>";
              return output;
            }
          };
          

         const listItems = res.map(item => generateHtml(item)).join('');
         body.innerHTML = `<div>${listItems}</div>`;
        }
      });

      
    })
  })()
// messageTemplates.js
const config = require('./config');
module.exports = {

  // Initial Suggested Reply Message to Kick-off
  initialMessage: (to) => ({
    to,
    from: config.rcsSenderId,
    channel: 'rcs',
    message_type: 'custom',
    custom: {
      contentMessage: {
        text: "Who will win?",
        suggestions: [
          { reply: { text: "Brazil", postbackData: "brazil" }},
          { reply: { text: "Germany", postbackData: "germany" }},
          { reply: { text: "Draw", postbackData: "draw" }},
        ]
      }
    }
  }),

   // Standalone Rich Card for voting on Man of the Match
   manOfTheMatchMessage: (to) => ({
    to,
    from: config.rcsSenderId,
    channel: 'rcs',
    message_type: 'custom',
    custom: {
      contentMessage: {
        richCard: {
          standaloneCard: {
            thumbnailImageAlignment: "RIGHT",
            cardOrientation: "VERTICAL",
            cardContent: {
              title: "Vote Now!",
              description: "Who was the man of the match?",
              media: {
                height: "TALL",
                contentInfo: {
                  fileUrl: config.images.manOfMatch,
                  forceRefresh: true
                }
              },
              suggestions: [
                { reply: { text: "Ronaldinho", postbackData: "ronaldinho" } },
                { reply: { text: "Ronaldo", postbackData: "ronaldo" } },
                { reply: { text: "Pele", postbackData: "pele" } }
              ]
            }
          }
        }
      }
    }
  }),

  // RCS Rich Card Carousel for Player Merch to Present
  playerMerchCarousel: (to) => ({
    to,
    from: config.rcsSenderId,
    channel: 'rcs',
    message_type: 'custom',
    custom: {
      contentMessage: {
        richCard: {
          carouselCard: {
            cardWidth: "MEDIUM",
            cardContents: [
              {
                title: "Ronaldinho Jersey",
                description: "Authentic gameworn kit.",
                media: {
                  height: "TALL",
                  contentInfo: {
                    fileUrl: config.images.jersey,
                    forceRefresh: true
                  }
                },
                suggestions: [
                  {
                    action: {
                      text: "Buy now",
                      postbackData: "buy_now_jersey",
                      openUrlAction: {
                        url: config.merchLinks.jersey
                      }
                    }
                  }
                ]
              },
              {
                title: "Autographed Photo",
                description: "Timeless photo signed by Ronaldinho himself.",
                media: {
                  height: "TALL",
                  contentInfo: {
                    fileUrl: config.images.photo,
                    forceRefresh: true
                  }
                },
                suggestions: [
                  {
                    action: {
                      text: "Buy now",
                      postbackData: "buy_now_photo",
                      openUrlAction: {
                        url: config.merchLinks.photo
                      }
                    }
                  }
                ]
              },
              {
                title: "Fan T-shirt",
                description: "100% Cotton, 100% Passion.",
                media: {
                  height: "TALL",
                  contentInfo: {
                    fileUrl: config.images.tshirt,
                    forceRefresh: true
                  }
                },
                suggestions: [
                  {
                    action: {
                      text: "Buy now",
                      postbackData: "buy_now_shirt",
                      openUrlAction: {
                        url: config.merchLinks.tshirt
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  })

};

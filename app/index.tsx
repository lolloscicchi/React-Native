import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  ListRenderItem,
} from 'react-native';

const DATA = [
  {
    image:
      'https://www.bing.com/th?id=OPEC.zu%2fUd5mnUWNHDg474C474&o=5&pid=21.1&w=160&h=160&qlt=100&dpr=1&pcl=f5f5f5',
    price: 89.99,
    title: 'Giacca Adidas Originals',
    description:
      'Questa giacca sportiva è perfetta per ogni occasione, comoda e alla moda.',
  },
  {
    image:
      'https://www.bfgcdn.com/600_600_90/004-5515-0311/the-north-face-mcmurdo-parka-parka.jpg',
    price: 129.5,
    title: 'Parka The North Face',
    description:
      'Il parka offre una protezione eccezionale contro il freddo, ideale per l’inverno.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.6XkX6HHTTaZ9kw474C474&o=5&pid=21.1&w=150&h=213&qlt=100&dpr=1',
    price: 49.9,
    title: 'T-shirt Nike Sportswear',
    description:
      'T-shirt in cotone di alta qualità, perfetta per allenamenti e tempo libero.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.uIGUuv3amV9tnA474C474&o=5&pid=21.1&w=160&h=176&qlt=100&dpr=1&c=8&pcl=f5f5f5',
    price: 75.99,
    title: 'Felpa Puma con Cappuccio',
    description:
      'Felpa calda con cappuccio, realizzata per il massimo comfort e stile casual.',
  },
  {
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAIAAgAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMEBwEFBgj/2gAIAQEAAAAAuYAAAADABAqYwu4XQAwEWsqmBy2LOeDJg0vnzTDr8PHR+hZ5kTilOQ12EyZEOZYNuihPK1JFkjsYQ6u4+iUJqfkH5yWIbkuHI6G21CfPrO0UpvXSnkNovWYaOnWJWFYjOLGHrS6w4Cuky1yGob8mI1jubJzVHJtbNasa2TIitS99a5RCNbMdwuEOurXLutFDytRPS+vWz1EJzF+Jp+E5FH0QdqqLsudcv4DmozCCM6t7ecvK7XIAAAAH/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAIBAwUEBv/aAAoCAhADEAAAAAAJgmAACGketXIWZgODYB6yUsavtygx/Tc3UTYizZXteVS7G9MjrNiqOa/mqujN3K2ibFUk0sOH4tOq9JdUbop683Qxleu+JAGRk//EAD8QAAIBAwIDBQUCCgsAAAAAAAECAwAEERIhBTFBBhMiYXEQFFGBkQcXFSBAQlJVgpOi0RYjJCUyNUVicqHS/9oACAEBAAE/APyHUa1GtRrUa4tftw3hl9ehA5t4HkCnYEim+1TjhPgsLED0en+1TjoVf7BY/R6+9bjbYAsLD+Om+1Pjir/l9l/HVrfi/s7W5TGieFJB+2ua1GtRrUa1H2H8S7vbOwhM13cxQRD86RgortT264Rd8OvOHWKTXBnTQZiNCLSgYzT7FTzBIBp1UXM4xykO1PpAJNdle2/CLXhlhw297+F4I9HfFMpUE8NzEk0EqSxOMq6MGU+hH4go+3jnGYOCWffOoeV9oYuWo/yFcdvbziF/JdXMxkeTxDJyEH6KjoK3alGNtQFeIcyPrV1qN3cHTzcmmdmPMUNq7PdoeIcEu0Nq+Yncd7A5PduK4bxCDillDdwZ0ODlTzVhzU+0UfYxVVLMQAASSegFcZv34vez3bbJsIE/RQchXE1jYRspGrOCPUUsZpoc0VZFI2Iq+ybqVRjLP1259TS8K8TL77YHSxUt34wcdR8RVzAInZNSPpOMxtkH0NcNt9bNIBkDYV2T4seFXzW0zYtbpgCTyR+Qb2ij7O2F4bbg5hVsPcyBP2V3apU8GVYg1bWouWYygFQ25NLZW7bpEMZ2zQtLYc4lz8DXu9oRj3ddx8KNvC0xMiJjm225NGOFzhI0A6AKBgULSJjui/SrUxWzT6iEGoED45FNM02QseB8TXZbiZ4lwiEu2Z4D3MvmV5N7BR9nbO/7/i/u4PgtFCertu1SsWGBUcSeEZJAGQPOokCpgdDtUirkHG+cVICm3XqKyGkOttuooOp2WPNRxY6DlUsSC4jd1/25oxgbKRXZO/NjxUQucRXQEZ8n5r7BRosFBZjgAEn0FXZku5bi4LHVLI7nzLHNWikS6W5aevSpFAwy8/KopFbbUCabSevWpU8Db465oQq8kjs22cAelKYVGxFCVChK74xmpF78GPl6nqKWRVjUfnciOtCR8gohDLuDywRyqxulvbK1uV5Swo/zI3oUa7R3fufBb1wcO6iFPWSiAqH0qJBKThiPSu7MYzrkblttisF30qDnqcYxXuzPnMjEUbdURmySR50Y07xlPQk7dPKlijDZwTv8aeIqMhee2BsaV1ykiBj8TUUZUyOpVgZGI8t+RrGFGObbDzrsdP3vCDCedvO6fJvEKFGu3t0UtbC2Xm8zyn0QYqR5yjFU8IqzbY6hipGmLDSmV2ywIzS60dyG1AYDefp6UratIA6VL/0RTjTr0gaiSBUSBFQcyOtH/DqO3QeeaXSlxpzgN0rwRyz7qMsGOdhmhOisWOp25cuVdiLsm8vrfSyo8KSDPUqcUKPKu104uONtH0t4ET5nxmn8BYcsj1DVZyAbkfKiUaJtLgnIz9a5AeHApdmJNTEFGOeQzSN4nKqWyx5fDNJLGDs3XkdiKQq5J31Cnx77Cmk7xsxPwwa0Br2UlQQqrlvOgqjAwBXZqUw8cswNu9DxfVaHsurmS5vbu5ZSTLO75B6E0XXGXDL8SRVvErlgrkeKiiw58bbsvhGN96ETsCdTa35jOwHmaNsyYPeMDyHxJr3d0RsuTsTUZbxHOMseXWlRnZiy6qjgZiQHINOjxTJuWYR46nGTtSI7SShnI5H5molHNjvVpKsN9ZygjKXMR+jD2cauvcuE39x1SB8ep2FW4GAPgKkKrGxbkBVk2oEqKlKkKCHBByPDzpJGYcjt0pI25s2XI5/og9BUyvofS2AFO1QoQoFRRcjTxFW1CldnbVpx4etHJuHwzLnkeWcbHFCLcku29CIR/wBZzK+IfLeomDxo45MoI+dcZsl4jwu7tDgd6mATyDcwaueyXHYMFUSdRz7p/wCeKTg3GOIXBsktpIXKZZ5gVVVritnb2HF7m2t9oYFhhX1RACalyNAz1rCoBpwSBSDSoHM8yfialfAYE4ypq3JcsOoY7UmBTZxTDxEnwjrSWH4S4BeyxIe/sLnvQOpikUa1H0zSyEaWZwQRRuFZMnAyCAK4SJBwuwEgIcW0Wc/8fZpNaTV52Q4ZfXM1yzXCSysWcpL1Pk1N2BsmGBe3Y+af+ab7P15JxSUL5opNfd+/64l/dih2AcZ/vXJI5mGvu7uA4dOLICM79zX3f3P64+kNL2BuF/1k/ua/oGx3biZ/dCuD8Ei4PFKiSGR5HDO525bAVefZ/PcX08kN5BDbu5ZE0ElQah7A8PiOJ7qebyGEBpEEaKijAUAD0H5D/8QAKhEBAAIBAwIEBQUAAAAAAAAAAQACAwQRIRASFDFRYRMyQUJTIFJygcH/2gAIAQIBAT8A67M2/SpUVeJRL1LHk9KfJX+JEAWCIJ11eTkoPuzFqqYaFEXaePp+y0NbWoHYuxMur+JS1a1SaTIo0f665Ld9r3irBiwUZjs0uW9GDuDM1u3Hd9p9r03d4wd5yzT27sNPY2msttjD1YeTE95sccyxyw2F5+kf8JonfHY9LTV0vdrsKBPhWrjbPHO0+k82XdlhzLUQonk1mi33yD6HS1a2NrAzw+H8ZPDYPxk8NhfsnhcH444cbWte3g8pWlKfLUJ//8QAMBEAAgIABAIHBwUAAAAAAAAAAQIAAwQQETEFEhMUQVNhobEVICEiMkNiQlFSkcH/2gAIAQMBAT8Az195VZ2CqNSZYrVuyNuDBLRpbYPyMGpIAhBUkEaEHPhtI5WuI8BMRgbMRabFKgGeybe9WPw13dm6QDUk7TD8PNNqu7BgJxGgAi1e34NnSnRV11+EAAyAMI1EurW2tkPaIQVJB3BmGTnvrX8vSfqAzHZlsJjU5MTaBsTr/c4YnNczfxX1h+pc12EP+jLii6W1t+6+k4bbVWHDOAxI3nTI1y1qdTyljmuwySwMbF7VbQzioBWk+LZJY9Z1Rip8IMbih90zr2L73yE69ih93yE6/i+98hFxV6u7h/mbcyy623TnctpP/9k=',
    price: 199.99,
    title: 'Giacca a Vento Columbia',
    description:
      'Giacca a vento resistente, ideale per escursioni all’aperto in qualsiasi stagione.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.v91C5X3%2bcOAzfw474C474&o=5&pid=21.1&w=148&h=260&qlt=100&dpr=1&bw=6&bc=FFFFFF',
    price: 110.0,
    title: "Pantaloni Levi's 501",
    description:
      "Classici jeans Levi's dal taglio dritto, confortevoli e resistenti.",
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.NzLTRTzsz2Fl3A474C474&o=5&pid=21.1&w=148&h=260&qlt=100&dpr=1&bw=6&bc=FFFFFF',
    price: 850.0,
    title: 'Piumino Moncler',
    description:
      'Piumino leggero ma estremamente caldo, perfetto per l’inverno in città.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.9h2rWsyLyVqreQ474C474&o=5&pid=21.1&w=150&h=176&qlt=100&dpr=1&c=8&pcl=f5f5f5',
    price: 60.0,
    title: 'Shorts Calvin Klein',
    description:
      'Shorts in cotone, eleganti e casual, perfetti per la stagione estiva.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.tXlLsEZJheaPKQ474C474&o=5&pid=21.1&w=148&h=189&qlt=100&dpr=1&bw=6&bc=FFFFFF',
    price: 49.99,
    title: 'Maglia Polo Ralph Lauren',
    description:
      'Polo classica in cotone, adatta a tutte le occasioni, con il celebre logo sul petto.',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    price: 200.0,
    title: 'Giacca Patagonia Nano Puff',
    description:
      'Giacca leggera e isolante, ideale per attività all’aperto anche nelle giornate più fredde.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.cOY4L3WanOebRw474C474&o=5&pid=21.1&w=150&h=199&qlt=100&dpr=1&c=8&pcl=f5f5f5',
    price: 35.0,
    title: 'T-shirt Hugo Boss',
    description:
      'T-shirt elegante in morbido cotone, perfetta per un look casual ma raffinato.',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    price: 180.0,
    title: 'Pantaloni Cargo Carhartt',
    description:
      'Pantaloni resistenti e versatili, perfetti per avventure all’aria aperta.',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    price: 95.0,
    title: 'Felpa con zip Lacoste',
    description:
      'Felpa con zip di alta qualità, comoda e versatile per ogni giorno.',
  },
  {
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAIAAgAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgcBAwYFBAj/2gAIAQEAAAAAsIAAAAAB4XJ46v3wAVFxmrs7iAGePq749P12h22QFa16jHGO4toSM/nr5kY4jt/RsjJ59BEYx14v/wBk2HO0flHENeL16cmclS0kMQ14u7sjYcLT00IwjC5u/NhW1UboxhGOq2bRNhVlW7sQjDGm2LXJlSVjuhCMNvz2fcRMqWrv0n6cIbNX5ZtW3SYAA//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAKAgIQAxAAAACUAAA65OWgDpneTGueiw74A4dEK7YA47g1OuQOOpTU65IrlrNKszTUlj//xABCEAABBAEBBAcEBAoLAAAAAAABAAIDEQQFBhIxcQcQISIyQVEwU2GRExQgUhUkJTVAQoGxssFDYmRzdIKSoqOz4v/aAAgBAQABPwCyrKsqyrKsqyrKsqyrKsqyrKsqz+j63tFp+hCMZAklnkG8yGPjXq4lHpEHlpHzn/8AKHSIfPSG18J1oe0eDrokbEx8U8Yt0T/T1BHtdugH65yxIUIv6xW78VsJ+fnf4OX97fZgE/sFn4ALV9s9OwA+LCrMyf8AhZzP6yztRzNTyn5WZJvyuoWAAABwAA4ALsLmj1cB8ynDcc5vo4rTdSzNJyxlYjg2QNLTvN3g5p4ghaVtzp+YWxZ7Pqcv3+MJ/m1AhwDgQQQCCDYIPmPY7ba3KZjpEDqiYAcj1e/jucgq6nEtpw4ggjmESX988XdpVKlsTrWRBnRaXI/expt7cB/o3gX3fYNoG3eEdp5DtKy8h2Zk5GS/xTSvkP8AmN9bkBTR1EgArDyXYWVjZQ4wzMk/0m01we1rmnuuAI5H7erzHG0jU5gaLMSWubhurgE3gOpwsAIeAIp/hKAtq2eyjm6Jps54ugAPNnd+xSpUtrARs5qXKL/sCJCHhHU7yXkEU/wlNPYtjWEbNab8RIRyLyqVKlSpUtuHhmzr2+b8uAfvKcm+FvU7iOa/VHJFSeF3JMAAWwbzJs7EPd5EzFSpUqVKl0hHd0fBb9/N/hYncEAAAin9gCrujkqRAIKYe6ujp+9o+XH7vNd/vaFuqlSoqiqK6R31BpEfrJO9P6ijxHNDwjl1x8F0ZuJZrLPR8BVFUVRVKlS6SXn6bR4vIRTP/aXJ4CHU7+aHhHJFFR8F0ZSm9Yg/uJFSpV10uko/j2lj0xX/AMafwXABxB3TwNGjyKMsfvG/NOkj9435r6SOh32/NGRn32/NMhmljkfHDK9jGlznNY4taB5kpgIC6MT+UNWb/ZIz8n/YpUqXSPiZkmfgTx4sz4Bh7hexheA7fKIcTuiN5f5NDTZK2fwXadoWl4bxTosZu+PR7+85Ox4H+OGN3NgKOFhu44sB5xtX4PwLLvqWNZ8/omJmLis8GPC3lG0LUcY5mm5+IOM+LNEOb2kBNDgdwsfvg0W7psFdG+nahBnZ2XNiSxY78URte9hZvO3wVSpUqVKl2rt9VSpUqVKl29VKlS//xAAdEQABBQADAQAAAAAAAAAAAAABAAIQETEgMkEw/9oACAECAQE/APmGikWir5NZ6UcQxOZ6ORwoZxGiDhQyDplvYQcQwQ7TLO0FDIdsg0i65DqRNx//xAAaEQEAAgMBAAAAAAAAAAAAAAABECAAETBB/9oACAEDAQE/AOauC2WPcHi82pLUoE6n/9k=',
    price: 249.0,
    title: 'Piumino Canada Goose',
    description:
      'Piumino premium, pensato per resistere anche alle temperature più rigide.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.W3k1gdOGdjCxQQ474C474&o=5&pid=21.1&w=160&h=199&qlt=100&dpr=1&pcl=f5f5f5',
    price: 70.0,
    title: 'Pantaloncini Nike Training',
    description:
      'Pantaloncini traspiranti e leggeri, ideali per l’allenamento in palestra o all’aperto.',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    price: 180.5,
    title: 'Giacca impermeabile The North Face',
    description:
      'Giacca impermeabile, perfetta per proteggersi dalla pioggia e dal vento in ogni stagione.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.QPi60sLdr8Cw4w474C474&o=5&pid=21.1&w=148&h=180&qlt=100&dpr=1&bw=6&bc=FFFFFF',
    price: 45.99,
    title: 'Camicia Levi’s Slim Fit',
    description:
      'Camicia slim fit in denim, un classico del guardaroba per uno stile senza tempo.',
  },
  {
    image:
      'https://www.bing.com/th?id=OPEC.phMntkS3hUe1pA474C474&o=5&pid=21.1&w=150&h=225&qlt=100&dpr=1&c=8&pcl=f5f5f5',
    price: 79.9,
    title: 'Sneakers Converse All Star',
    description:
      'Le classiche sneakers alte, un’icona di stile senza tempo e adatte a qualsiasi outfit.',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    price: 140.0,
    title: 'Giacca Nike Windrunner',
    description:
      'Giacca sportiva e leggera, ideale per proteggersi dal vento durante la corsa.',
  },
  {
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAIAAgAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcCBQYIBAP/2gAIAQEAAAAAuQ+Oqa03HN/h1ml7y2dyGh84a5sfs1PR8s/e/u4MfNfLxMRlEzGw9PbBV1J4iP2/IyWLfHxeW/jwlDKPv1+afSnJUxjhlBJGUz39l0tzv55QExlO0t6y8Kg0HBYhMdtsbt+wcR54xGSLht4HEed4SmYuC3gcR54xJlFxW6DiPPGJMlw26DiPO8EyXDboOI88QSLht0HEeeMUyLht0HEeeIJJuC3T/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAED/9oACgICEAMQAAAACstI2zgFoAkLQEWQWgCQLQJALQJALQJALQJD/8QAPBAAAQMCAQcJBQYHAAAAAAAAAQIDBAAFEQYHECAhMUESIjI2UWFxdLIwQlKBhBMUI4KRoRUzQ1NkwtP/2gAIAQEAAT8A0zrjAtbBkTpTbDXxLO/uSN5NXnOes4tWaIEf5D/+qKuF2uV1d+1nTXpCxu5atifAbhVtdDzJSriMcP2UKksmO+40fdURROFQGjFtyVYc9fP+atiaE+RHll+K+40tBwQttRSrAd4qz5yrnFKUXJpMxr4+g9Vnv9pvrRXBlJUpIxW0rmuo8U62UV+j5PW1ctzBTh5jDXxrq53SfeJa5U6Qt509u5I7EjgNNuf+zd5PfiO/tFXhDCuQ8l1vl4BJSDtIO41FYS7JbbeWlCCdpUcNnZ86ukkNNYJI2bsPiVu/QaBTEh6M6h9h1bTrZxQtBKVJPcRWReVQv0RUaWQLiwOfwDqPj1FrQ2ha1qCUISVKUdgAG0k1lZlAvKK6rfGIitYojI7Edviqsdpo6h79G6veFY4frVtuMm1To06KrkvMrxHYocUnuNWq5Rrvb406Mfw3kY4cUHik9405yL+I0ZFmjr/FfSFye5vgjQOlRo6XS0Sn7JsoAQAcVcrE8TpJ6Jo8NGbzKAW24m2yF4RZqgEdiHtFxnsWuBLnSP5UdorPedwSO9RqfNkXGbJmSVYvPuFa/nwHcK7a94UaOk6IrEZ1KS66E4OkLxOGCOTvHacaPR+dK3J0DxwNZIX3+P2Zp5xQ+9MYMyO9Y3L/ADVnQuKkR7bbkL2Olb7v5NiKI0e+PDUFY6fio9EVxNDeKzcXBcS/iJy8GprK0Edq0c9FZSZFwsoXDKMl9iWGwgL6aMB2oq+ZMXewLxlsYsk4JkN7WzoOxYoa46RodGhtwNWy03G8v/d4EVTqx0juQgHitR3Vk/m7Ytz0abOmLdlNLStCGeY2hQ0OtNvNrbdbQtC0kKSscpJB4EGsqc3nIDk2yJJG9cP/AJVMyNVaslH7rPxExa2Q2z/aQtXr9gOlWSuTDWUkK8gOluVHLJYV7hKgrFK6yfzfXGe+V3NC4cZCyCn+q5UC3wrZFbiw46GWUbkpH7ntOrnE6qyvMR/X7D3qzUbr94xtfOJ1VleYY9dcNfjWajdfvptfOJ1VleYj+v2HGs1G6/fTa+cTqrK8wx6/YcazUbr94xtfOJ1VleYY9fsBWajdfvptfOJ1VleYY9fsBWajdfvptfOJ1VleYj+vUGoKzUbr94xtfOJ1VleYY9fsBWajdfvptT//xAAeEQACAQMFAAAAAAAAAAAAAAABAhEDEkEAEFBxof/aAAgBAgEBPwDeLKs4ce6qC90TEyehzn//xAAcEQABAwUAAAAAAAAAAAAAAAACASJBABARMVD/2gAIAQMBAT8AujgxI0LRIp0nc//Z',
    price: 49.95,
    title: 'Polo Fred Perry',
    description:
      'Polo classica con dettagli a contrasto, perfetta per un look casual ed elegante.',
  },
];

const Card = props => {
  console.log(props.title);
  return (
    // INIT CARD

    <View
      style={{
        width: '98%',
        height: 300,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        marginVertical: 8,
        marginHorizontal: 10,
      }}>
      {/*IMAGE*/}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={props.image}
          alt={'Image not found'}
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
      {/*IMAGE*/}

      {/*DESCRIPTION*/}
      <View style={{ flex: 1, paddingVertical: 16, paddingRight: 35 }}>
        <Text style={{ fontSize: 30, fontWeight: '800' }}>
          {props.title ?? 'Titolo non trovato'}
        </Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>
            {props.description ?? 'descrizione non trovata'}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            $ {props.price ?? 'descrizione non trovata'}
          </Text>
        </View>
      </View>
    </View>
    // END CARD
  );
};

const renderItem: ListRenderItem<any> = ({ item }) => {
  console.log(item.image);
  return (
    <Card
      title={item.title}
      image={{ uri: item.image }}
      description={item.description}
      price={item.price}
    />
  );
};

export default function Index() {
  return <FlatList data={DATA} renderItem={renderItem} />; //Manca il titolo, il footer e il messaggio nel caso l'array fosse vuoto
}

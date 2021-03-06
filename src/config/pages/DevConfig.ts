/*
 * @Author: Mr Chang
 * @Date: 2021-05-21 16:57:15
 * @LastEditTime: 2021-05-23 10:29:23
 * @LastEditors: Mr Chang
 * @Description:
 * @FilePath: \basis-mini-program\src\config\pages\DevConfig.ts
 */
import Taro from "@tarojs/taro";

export default {
  dev: {
    items: {
      item1: {
        img: require("@/assets/jsx.png"),
        txt: "JSX",
        onItemClick: (): void => {
          toPage("JSX", require("@/assets/jsx.png"));
        },
      },
      item2: {
        img: require("@/assets/java.png"),
        txt: "Java",
        onItemClick: () => {
          toPage("Java", require("@/assets/java.png"));
        },
      },
      item3: {
        img: require("@/assets/http.png"),
        txt: "HTTP",
        onItemClick: () => {
          toPage("HTTP", require("@/assets/http.png"));
        },
      },
      item4: {
        img: require("@/assets/html.png"),
        txt: "HTML",
        onItemClick: () => {
          toPage("HTML", require("@/assets/html.png"));
        },
      },
      item5: {
        img: require("@/assets/firewall.png"),
        txt: "FireWall",
        onItemClick: () => {
          toPage("FireWall", require("@/assets/firewall.png"));
        },
      },
      item6: {
        img: require("@/assets/database.png"),
        txt: "Database",
        onItemClick: () => {
          toPage("Database", require("@/assets/database.png"));
        },
      },
      item7: {
        img: require("@/assets/css.png"),
        txt: "CSS",
        onItemClick: () => {
          toPage("CSS", require("@/assets/css.png"));
        },
      },
      item8: {
        img: require("@/assets/cpp.png"),
        txt: "C++",
        onItemClick: () => {
          toPage("C++", require("@/assets/cpp.png"));
        },
      },
    },
  },
};

function toPage(title, img) {
  console.log(title, img);

  Taro.navigateTo({
    url: "/pages/devInfo/index?title=" + title + "&img=" + img,
  });
}

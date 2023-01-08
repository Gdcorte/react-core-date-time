import styled, { css } from "styled-components";

import { InputCss } from "@gdcorte/react-core-input";
import { findBestContrast } from "@gdcorte/react-core-theme";

export const OriginalCssWrapper = css`
  .rdt {
    position: relative;
  }
  .rdtPicker {
    display: none;
    position: absolute;
    min-width: 250px;
    padding: 4px;
    margin-top: 1px;
    z-index: 99999 !important;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f9f9f9;
  }
  .rdtOpen .rdtPicker {
    display: block;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }

  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }

  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 28px;
  }
  .rdtPicker td {
    cursor: pointer;
  }

  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: #999999;
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }
  .rdtPicker td.rdtToday:before {
    content: "";
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #428bca;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #428bca;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }

  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid #f9f9f9;
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: top;
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-of-type th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-of-type th:hover {
    background: #eeeeee;
  }

  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }

  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }

  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }

  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: #eee;
  }

  .rdtCounters {
    display: inline-block;
  }

  .rdtCounters > div {
    float: left;
  }

  .rdtCounter {
    height: 100px;
  }

  .rdtCounter {
    width: 40px;
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }

  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }

  .rdtTime td {
    cursor: default;
  }
`;

export const StyledDateTimeContainer = styled.div`
  ${OriginalCssWrapper};

  input {
    ${InputCss};

    :focus {
      box-shadow: none;
      border: 2px dashed ${({ theme: { colors } }) => colors.primary.base};
      background-color: ${({ theme: { background } }) => background.base};
      color: ${({ theme: { colors } }) => colors.primary.base};
    }
  }

  .rdtPicker {
    color: ${({ theme: { colors } }) => colors.primary.shade3};
    background-color: ${({ theme: { background } }) => background.base};
    border: 2px solid ${({ theme: { colors } }) => colors.primary.shade3};
    border-radius: 5px;

    .rdtTimeToggle {
      color: ${({ theme: { colors } }) => colors.primary.base};
    }
  }

  div.rdtDays {
    thead {
      color: ${({ theme: { background, fonts } }) =>
        findBestContrast(background.base, fonts)};
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary.base};
    }

    tfoot {
      border-top: 1px solid ${({ theme: { colors } }) => colors.primary.base};
    }

    th {
      border-bottom: none;
    }

    .rdtPicker th.dow {
    }

    thead tr:first-of-type th {
      color: ${({ theme: { colors } }) => colors.primary.base};

      :hover {
        color: ${({ theme: { colors, fonts } }) =>
          findBestContrast(colors.primary.shade3, fonts)};
        background-color: ${({ theme: { colors } }) => colors.primary.shade3};
        border-radius: 5px;
      }

      &.rdtPrev:hover,
      &.rdtNext:hover {
        border-radius: 50%;
      }
    }

    td.rdtToday:before {
      border-bottom: 7px solid ${({ theme: { colors } }) => colors.primary.base};
    }

    td.rdtOld,
    td.rdtNew {
      color: ${({ theme: { background } }) => background.base} !important;
      cursor: default;

      :hover {
        color: ${({ theme: { background } }) => background.base};
        background-color: ${({ theme: { background } }) => background.base};
      }
    }

    td.rdtActive {
      border-radius: 5px 20px 5px;
      background-color: ${({ theme: { colors } }) => colors.primary.shade2};
      color: ${({ theme: { background } }) => background.base};
    }

    td:hover {
      color: ${({ theme: { colors, fonts } }) =>
        findBestContrast(colors.primary.shade3, fonts)};
      background-color: ${({ theme: { colors } }) => colors.primary.shade3};
      border-radius: 5px;
    }

    tfoot {
      margin: 4px 0px;
      border-top: 1px solid ${({ theme: { colors } }) => colors.primary.base};
    }
  }

  .rdtTime {
    thead {
      color: ${({ theme: { colors } }) => colors.primary.base};
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary.base};
      font-weight: bold;

      td {
        color: ${({ theme: { colors } }) => colors.primary.base};
        cursor: pointer;

        :hover {
          color: ${({ theme: { colors, fonts } }) =>
            findBestContrast(colors.primary.shade3, fonts)};
          background-color: ${({ theme: { colors } }) => colors.primary.shade3};
          border-radius: 5px;
          font-weight: normal;
        }
      }
    }

    .rdtCount,
    .rdtCounterSeparator {
      color: ${({ theme: { background, fonts } }) =>
        findBestContrast(background.base, fonts)};
    }

    .rdtBtn {
      color: ${({ theme: { colors } }) => colors.primary.base};
      :hover {
        border-radius: 20px;
        color: ${({ theme: { colors, fonts } }) =>
          findBestContrast(colors.primary.shade3, fonts)};
        background-color: ${({ theme: { colors } }) => colors.primary.shade3};
      }
    }
  }

  .rdtMonths,
  .rdtYears {
    th {
      border-bottom: none;
    }

    thead {
      color: ${({ theme: { colors } }) => colors.primary.base};
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary.base};
    }

    td.rdtActive {
      border-radius: 5px 20px 5px;
      background-color: ${({ theme: { colors } }) => colors.primary.base};
      color: ${({ theme: { background } }) => background.base};
    }

    td {
      :hover {
        color: ${({ theme: { background } }) => background.base};
        background-color: ${({ theme: { colors } }) => colors.secondary.base};
        border-radius: 5px;
      }
    }

    thead tr:first-of-type th {
      color: ${({ theme: { colors } }) => colors.primary.base};

      :hover {
        color: ${({ theme: { background } }) => background.base};
        background-color: ${({ theme: { colors } }) => colors.secondary.base};
        border-radius: 5px;
      }

      &.rdtPrev:hover,
      &.rdtNext:hover {
        border-radius: 50%;
      }
    }
  }
`;

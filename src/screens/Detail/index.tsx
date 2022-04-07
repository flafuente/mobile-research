import React from "react";
import { Linking, View, TouchableWithoutFeedback } from "react-native";
import { Props } from '@navigation/index'
import { statusColorResolver } from "@utils/index";
import Avatar from "@components/Avatar";
import DetailRow from "@components/DetailRow";
import styles from "./styles";
import moment from "moment";

function Detail({route}: Props) {
  const sendEmail = () => Linking.openURL('mailto:support@example.com?subject=Role&body=Dear');
  const {name, email, application_date, birth_date, position_applied, year_of_experience, status} = route?.params;
  return (
    <View testID="detail-screen" style={styles.container}>
      <Avatar
        displayBig
        experience={year_of_experience}
        fullName={name}
        backgroundColor={statusColorResolver(status)}
      />
      <DetailRow description={'Position'} value={position_applied}/>
      <DetailRow description={'Status'} value={status}/>
      <DetailRow description={'Experience'} value={`${year_of_experience} year${(year_of_experience) !== 1 ? 's': '' }`}/>
      <DetailRow description={'Application'} value={moment(application_date).format("MMMM Do YYYY").toString()}/>
      <TouchableWithoutFeedback onPress={sendEmail}>
        <View style={styles.touchableView}>
          <DetailRow description={'Email'} value={email}/>
        </View>
      </TouchableWithoutFeedback>
      <DetailRow description={'Age'} value={moment().diff(birth_date, 'years',false).toString()}/>
    </View>
  );
}

export default Detail;
  
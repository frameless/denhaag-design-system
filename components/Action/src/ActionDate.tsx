import React from 'react';
import { format, differenceInDays } from 'date-fns';
import { nl } from 'date-fns/locale';
import { AlertTriangleFilledIcon } from '@gemeente-denhaag/icons';

interface Props {
  date: Date;
  relative?: boolean;
  locale?: Locale;
}

export const ActionDate = ({ date, relative = false, locale = nl }: Props) => {
  const daysDifference = differenceInDays(date, new Date());
  const dateTime = format(date, 'yyyy-MM-dd');

  if (relative) {
    if (daysDifference < 0) return null;

    if (daysDifference <= 2)
      return (
        <div className="denhaag-action__date denhaag-action__date--warning">
          <AlertTriangleFilledIcon className="denhaag-action__warning-icon" useDefaultClass={false} />
          <time dateTime={dateTime}>{`nog ${daysDifference} dagen`}</time>
        </div>
      );

    return (
      <div className="denhaag-action__date">
        <time dateTime={dateTime}>{`vóór ${format(date, 'd MMMM yyyy', { locale: locale })}`}</time>
      </div>
    );
  }

  if (daysDifference === 0) {
    return (
      <div className="denhaag-action__date">
        <time dateTime={dateTime}>vandaag</time>
      </div>
    );
  }

  return (
    <div className="denhaag-action__date">
      <time dateTime={dateTime}>{format(date, 'd-M-yyyy')}</time>
    </div>
  );
};

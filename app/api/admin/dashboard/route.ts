import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import ContactForm from '../../../../models/ContactForm';
import CareerForm from '../../../../models/CareerForm';
import ChannelPartnerForm from '../../../../models/ChannelPartnerForm';
import GrievanceForm from '../../../../models/GrievanceForm';
import ProjectEnquiryForm from '../../../../models/ProjectEnquiryForm';
import { withAuth } from '../../../../lib/middleware';

async function handler(request: NextRequest, user: any) {
  try {
    await connectDB();

    // Get counts for all form types
    const [
      contactCount,
      careerCount,
      channelPartnerCount,
      grievanceCount,
      projectEnquiryCount
    ] = await Promise.all([
      ContactForm.countDocuments(),
      CareerForm.countDocuments(),
      ChannelPartnerForm.countDocuments(),
      GrievanceForm.countDocuments(),
      ProjectEnquiryForm.countDocuments()
    ]);

    // Get recent submissions (last 10 from each form type)
    const [
      recentContacts,
      recentCareers,
      recentChannelPartners,
      recentGrievances,
      recentProjectEnquiries
    ] = await Promise.all([
      ContactForm.find().sort({ createdAt: -1 }).limit(10),
      CareerForm.find().sort({ createdAt: -1 }).limit(10),
      ChannelPartnerForm.find().sort({ createdAt: -1 }).limit(10),
      GrievanceForm.find().sort({ createdAt: -1 }).limit(10),
      ProjectEnquiryForm.find().sort({ createdAt: -1 }).limit(10)
    ]);

    // Get submissions by month for the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyStats = await Promise.all([
      ContactForm.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
      CareerForm.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
      ChannelPartnerForm.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
      GrievanceForm.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
      ProjectEnquiryForm.aggregate([
        { $match: { createdAt: { $gte: sixMonthsAgo } } },
        {
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ])
    ]);

    return NextResponse.json({
      stats: {
        totalSubmissions: contactCount + careerCount + channelPartnerCount + grievanceCount + projectEnquiryCount,
        contactCount,
        careerCount,
        channelPartnerCount,
        grievanceCount,
        projectEnquiryCount
      },
      recentSubmissions: {
        contacts: recentContacts,
        careers: recentCareers,
        channelPartners: recentChannelPartners,
        grievances: recentGrievances,
        projectEnquiries: recentProjectEnquiries
      },
      monthlyStats: {
        contacts: monthlyStats[0],
        careers: monthlyStats[1],
        channelPartners: monthlyStats[2],
        grievances: monthlyStats[3],
        projectEnquiries: monthlyStats[4]
      }
    });
  } catch (error) {
    console.error('Dashboard data error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(handler);
